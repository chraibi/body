"""Download a timestamped JSON copy of the Firebase Realtime Database.

Usage:
    uv run backup_db.py [--key serviceAccountKey.json] [--out backups]

The service account key is created in the Firebase console:
Project settings -> Service accounts -> Generate new private key.
Keep it out of git: it grants full admin access to the project.
"""

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path

import firebase_admin
from firebase_admin import credentials, db

DATABASE_URL = "https://wup-exp-2026-default-rtdb.europe-west1.firebasedatabase.app"
SCRIPT_DIR = Path(__file__).resolve().parent

parser = argparse.ArgumentParser(description="Back up the Firebase Realtime Database to a JSON file.")
parser.add_argument("--key", type=Path, default=SCRIPT_DIR / "serviceAccountKey.json",
                    help="path to the service account key (default: serviceAccountKey.json next to this script)")
parser.add_argument("--out", type=Path, default=SCRIPT_DIR / "backups",
                    help="folder where backups are written (default: backups/ next to this script)")
args = parser.parse_args()

if not args.key.exists():
    print(f"Service account key not found: {args.key}", file=sys.stderr)
    sys.exit(1)

firebase_admin.initialize_app(credentials.Certificate(args.key), {"databaseURL": DATABASE_URL})

# The Admin SDK bypasses the security rules, so this reads the whole tree
data = db.reference("/").get() or {}

args.out.mkdir(parents=True, exist_ok=True)
out_file = args.out / f"db_{datetime.now():%Y-%m-%d_%H-%M-%S}.json"
out_file.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")

def count_entries(node):
    # Firebase returns numeric keys ("1", "2", ...) as a list padded with None
    if isinstance(node, list):
        return sum(item is not None for item in node)
    return len(node or {})


participants = data.get("data") or {}
n_trials = sum(count_entries(p.get("trials")) for p in participants.values() if isinstance(p, dict))
print(f"Saved {out_file} ({len(participants)} participants, {n_trials} trials)")
