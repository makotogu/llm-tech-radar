#!/usr/bin/env python3
"""Score fixed candidate outputs against enterprise eval cases."""

from __future__ import annotations

import csv
import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(name: str):
    return json.loads((ROOT / "data" / name).read_text(encoding="utf-8"))


cases = {row["sample_id"]: row for row in load_json("eval_cases.json")}
outputs = load_json("candidate_outputs.json")

report_dir = ROOT / "reports"
report_dir.mkdir(parents=True, exist_ok=True)
scorecard = report_dir / "eval-scorecard.csv"
summary = report_dir / "eval-summary.csv"

score_fields = [
    "candidate",
    "sample_id",
    "eval_type",
    "risk_level",
    "passed_checks",
    "total_checks",
    "score",
    "high_risk_fail",
    "failure_type",
]

summary_rows: dict[str, dict[str, float]] = defaultdict(
    lambda: {"cases": 0, "score_sum": 0, "failed": 0, "high_risk_fail": 0}
)

with scorecard.open("w", encoding="utf-8", newline="") as fh:
    writer = csv.DictWriter(fh, fieldnames=score_fields)
    writer.writeheader()
    for row in outputs:
        case = cases[row["sample_id"]]
        required = case["required_checks"]
        passed = sum(1 for check in required if row["checks"].get(check) is True)
        total = len(required)
        score = passed / total
        failed = passed != total
        high_risk_fail = failed and case["risk_level"] == "high"

        writer.writerow(
            {
                "candidate": row["candidate"],
                "sample_id": row["sample_id"],
                "eval_type": case["eval_type"],
                "risk_level": case["risk_level"],
                "passed_checks": passed,
                "total_checks": total,
                "score": f"{score:.2f}",
                "high_risk_fail": int(high_risk_fail),
                "failure_type": row["failure_type"],
            }
        )

        bucket = summary_rows[row["candidate"]]
        bucket["cases"] += 1
        bucket["score_sum"] += score
        bucket["failed"] += int(failed)
        bucket["high_risk_fail"] += int(high_risk_fail)

with summary.open("w", encoding="utf-8", newline="") as fh:
    fields = ["candidate", "cases", "average_score", "failed_cases", "high_risk_failures", "recommendation"]
    writer = csv.DictWriter(fh, fieldnames=fields)
    writer.writeheader()
    for candidate, row in sorted(summary_rows.items()):
        average = row["score_sum"] / row["cases"]
        recommendation = "hold" if row["high_risk_fail"] else "canary_candidate"
        writer.writerow(
            {
                "candidate": candidate,
                "cases": int(row["cases"]),
                "average_score": f"{average:.2f}",
                "failed_cases": int(row["failed"]),
                "high_risk_failures": int(row["high_risk_fail"]),
                "recommendation": recommendation,
            }
        )

print(f"wrote {scorecard}")
print(f"wrote {summary}")
