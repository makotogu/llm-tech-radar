#!/usr/bin/env python3
"""Create an empty scorecard CSV from samples.json."""

from __future__ import annotations

import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
samples = json.loads((ROOT / "data" / "samples.json").read_text(encoding="utf-8"))
out = ROOT / "reports" / "scorecard.csv"
out.parent.mkdir(parents=True, exist_ok=True)

fields = [
    "sample_id",
    "business_label",
    "risk",
    "v0_format_ok",
    "v0_constraint_ok",
    "v0_risk_violation",
    "v1_format_ok",
    "v1_constraint_ok",
    "v1_risk_violation",
    "winner",
    "notes",
]

with out.open("w", encoding="utf-8", newline="") as fh:
    writer = csv.DictWriter(fh, fieldnames=fields)
    writer.writeheader()
    for row in samples:
        writer.writerow(
            {
                "sample_id": row["sample_id"],
                "business_label": row["business_label"],
                "risk": row["risk"],
                "v0_format_ok": "",
                "v0_constraint_ok": "",
                "v0_risk_violation": "",
                "v1_format_ok": "",
                "v1_constraint_ok": "",
                "v1_risk_violation": "",
                "winner": "",
                "notes": "",
            }
        )

print(f"wrote {out}")
