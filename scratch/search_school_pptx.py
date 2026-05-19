with open(r"d:\www\spmb\public\extracted_pptx.txt", "r", encoding="utf-8") as f:
    text = f.read()

import re

def search_text(pattern, keyword):
    matches = []
    for match in re.finditer(pattern, text, re.IGNORECASE):
        start = max(0, match.start() - 150)
        end = min(len(text), match.end() + 400)
        matches.append(f"=== MATCH FOR '{keyword}' ===\n{text[start:end]}\n")
    return matches

results = []
results.extend(search_text(r"surakarta|solo", "Surakarta/Solo"))
results.extend(search_text(r"smkn\s*4", "SMKN 4"))
results.extend(search_text(r"daya tampung|kuota\s*jurusan", "Daya Tampung/Kuota"))

with open(r"d:\www\spmb\scratch\pptx_school_matches.txt", "w", encoding="utf-8") as f:
    f.writelines(results)

print("PPTX school matches compiled.")
