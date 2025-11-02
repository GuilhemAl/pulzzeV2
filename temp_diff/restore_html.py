import subprocess
from pathlib import Path

files = [
    "index.html",
    "pages/about.html",
    "pages/contact.html",
    "pages/game.html",
    "pages/login.html",
    "pages/partenariat.html",
    "pages/prototypes.html",
    "pages/puzzle3d.html",
    "pages/puzzle-fr-35.html",
    "pages/puzzle-fr-45.html",
    "pages/puzzle-en-35.html",
    "pages/puzzle-en-45.html",
    "pages/puzzle-es-35.html",
    "pages/puzzle-es-45.html",
]

for rel_path in files:
    data = subprocess.check_output(["git", "show", f"HEAD:{rel_path}"])
    Path(rel_path).write_bytes(data)
