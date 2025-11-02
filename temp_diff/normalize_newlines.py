from pathlib import Path

path = Path("index.html")
text = path.read_text(encoding='utf-8')
normalized = text.replace('\r\n', '\n').replace('\r', '\n')
path.write_text(normalized, encoding='utf-8', newline='\r\n')
