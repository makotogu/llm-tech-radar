#!/usr/bin/env python3
"""Evaluate whether retrieved context respects enterprise RAG gates."""

from __future__ import annotations

import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load_json(name: str):
    return json.loads((ROOT / "data" / name).read_text(encoding="utf-8"))


questions = {row["sample_id"]: row for row in load_json("questions.json")}
runs = load_json("retrieval_runs.json")

out = ROOT / "reports" / "context-scorecard.csv"
out.parent.mkdir(parents=True, exist_ok=True)

fields = [
    "strategy",
    "sample_id",
    "risk",
    "citation_hit",
    "forbidden_blocked",
    "decision",
    "pass",
    "notes",
]

with out.open("w", encoding="utf-8", newline="") as fh:
    writer = csv.DictWriter(fh, fieldnames=fields)
    writer.writeheader()
    for run in runs:
        question = questions[run["sample_id"]]
        retrieved = set(run["retrieved_docs"])
        required = set(question["required_docs"])
        forbidden = set(question["forbidden_docs"])
        citation_hit = required.issubset(retrieved)
        forbidden_blocked = retrieved.isdisjoint(forbidden)
        passed = citation_hit and forbidden_blocked and run["decision"] in {
            "answer_with_citation",
            "blocked",
            "needs_human_review",
        }
        notes = []
        if not citation_hit:
            notes.append("missing_required_source")
        if not forbidden_blocked:
            notes.append("forbidden_source_in_context")
        writer.writerow(
            {
                "strategy": run["strategy"],
                "sample_id": run["sample_id"],
                "risk": question["risk"],
                "citation_hit": int(citation_hit),
                "forbidden_blocked": int(forbidden_blocked),
                "decision": run["decision"],
                "pass": int(passed),
                "notes": ";".join(notes),
            }
        )

print(f"wrote {out}")
