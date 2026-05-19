with open(r"d:\www\spmb\public\extracted_pptx.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

search_words = ["seleksi", "kuota", "afirmasi", "prestasi", "domisili", "nilai", "piagam", "kejuaraan"]
matches = []

current_slide = ""
for line in lines:
    if "SLIDE" in line:
        current_slide = line.strip()
    for word in search_words:
        if word in line.lower():
            matches.append(f"{current_slide}: {line.strip()}")
            break

# Write search results
output_path = r"d:\www\spmb\scratch\pptx_search_results.txt"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(f"Found {len(matches)} matches in PPTX:\n\n")
    for match in matches[:150]:  # Limit output
        f.write(match + "\n")

print(f"PPTX search completed. Written to {output_path}")
