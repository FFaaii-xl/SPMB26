with open(r"d:\www\spmb\public\extracted_juknis.txt", "r", encoding="utf-8") as f:
    juknis_content = f.read()

with open(r"d:\www\spmb\public\extracted_pptx.txt", "r", encoding="utf-8") as f:
    pptx_content = f.read()

import re

def search_text(text, keyword, title):
    matches = []
    for match in re.finditer(re.escape(keyword), text, re.IGNORECASE):
        start = max(0, match.start() - 150)
        end = min(len(text), match.end() + 600)
        matches.append(f"[{title}] ...{text[start:end]}...\n")
    return matches

results = []
results.extend(search_text(juknis_content, "ketua", "JUKNIS"))
results.extend(search_text(pptx_content, "ketua", "PPTX"))
results.extend(search_text(juknis_content, "organisasi", "JUKNIS")[:2])
results.extend(search_text(pptx_content, "organisasi", "PPTX")[:2])
results.extend(search_text(juknis_content, "bobot", "JUKNIS")[:3])
results.extend(search_text(pptx_content, "bobot", "PPTX")[:3])

output_path = r"d:\www\spmb\scratch\organisasi_points.txt"
with open(output_path, "w", encoding="utf-8") as f:
    f.writelines(results)

print(f"Organisasi search completed. Written to {output_path}")
