with open(r"d:\www\spmb\public\extracted_juknis.txt", "r", encoding="utf-8") as f:
    content = f.read()

# Search for "organisasi" and surrounding text (e.g. 500 chars before/after)
def get_contexts(keyword, length=1000):
    matches = []
    for match in re.finditer(re.escape(keyword), content, re.IGNORECASE):
        start = max(0, match.start() - 200)
        end = min(len(content), match.end() + length)
        matches.append(f"=== MATCH FOR '{keyword}' ===\n{content[start:end]}\n")
    return matches

import re
results = []
results.extend(get_contexts("organisasi", 800)[:3])
results.extend(get_contexts("kurasi", 800)[:3])
results.extend(get_contexts("piagam", 800)[:3])
results.extend(get_contexts("kemampuan akademik", 800)[:3])

output_path = r"d:\www\spmb\scratch\juknis_search_results.txt"
with open(output_path, "w", encoding="utf-8") as f:
    f.writelines(results)

print(f"Juknis search completed. Summary written to {output_path}")
