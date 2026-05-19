with open(r"d:\www\spmb\public\extracted_juknis.txt", "r", encoding="utf-8") as f:
    text = f.read()

import re
matches = []
for match in re.finditer(r"organisasi", text, re.IGNORECASE):
    start = max(0, match.start() - 100)
    end = min(len(text), match.end() + 300)
    matches.append(text[start:end])

with open(r"d:\www\spmb\scratch\all_organisasi_matches.txt", "w", encoding="utf-8") as f:
    f.write(f"Found {len(matches)} occurrences of 'organisasi' in Juknis:\n\n")
    for idx, m in enumerate(matches):
        f.write(f"Occurrence {idx+1}:\n{m}\n" + "="*40 + "\n")

print("All organisasi matches compiled.")
