with open(r"d:\www\spmb\public\extracted_juknis.txt", "r", encoding="utf-8") as f:
    juknis = f.read()

with open(r"d:\www\spmb\public\extracted_pptx.txt", "r", encoding="utf-8") as f:
    pptx = f.read()

import re

# Search for any digits/points near 'organisasi' or 'ketua'
def search_points(text, keyword):
    matches = []
    for match in re.finditer(re.escape(keyword), text, re.IGNORECASE):
        start = max(0, match.start() - 100)
        end = min(len(text), match.end() + 300)
        matches.append(text[start:end])
    return matches

print("Searching Juknis:")
for m in search_points(juknis, "organisasi")[:5]:
    print("-" * 30)
    print(m)

print("\nSearching PPTX:")
for m in search_points(pptx, "Organisasi")[:5]:
    print("-" * 30)
    print(m)
