with open(r"d:\www\spmb\public\extracted_pptx.txt", "r", encoding="utf-8") as f:
    content = f.read()

# Let's find SLIDE containing "Ketua Organisasi"
slides = content.split("=========================================\n")

results = []
for slide in slides:
    if "Ketua Organisasi" in slide or "Nilai Organisasi" in slide or "NO" in slide or "OSIS" in slide:
        results.append(f"=== SLIDE ===\n{slide}\n")

with open(r"d:\www\spmb\scratch\osis_search.txt", "w", encoding="utf-8") as f:
    f.writelines(results)

print(f"OSIS search completed. Written to scratch/osis_search.txt")
