import re
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

pattern = re.compile(
    r"\n\s*<div class=\"lang-toggle\"[^>]*>\s*"\
    r"<button[^<]*</button>\s*"\
    r"<button[^<]*</button>\s*"\
    r"<button[^<]*</button>\s*"\
    r"</div>",
    flags=re.MULTILINE
)

for rel_path in files:
    path = Path(rel_path)
    text = path.read_text(encoding='utf-8')
    newline = '\r\n' if '\r\n' in text else '\n'
    normalized = text.replace('\r\n', '\n').replace('\r', '\n')
    new_text, count = pattern.subn('\n', normalized, count=1)
    if count == 0:
        raise SystemExit(f"lang-toggle block not removed in {rel_path}")
    path.write_text(new_text, encoding='utf-8', newline=newline)
