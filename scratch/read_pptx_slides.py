with open(r"d:\www\spmb\public\extracted_pptx.txt", "r", encoding="utf-8") as f:
    content = f.read()

slides = content.split("=========================================\n")

results = []
for slide in slides:
    for num in ["8", "9", "10", "11", "12", "13"]:
        if f"[ SLIDE {num} ]" in slide:
            results.append(f"=== SLIDE {num} ===\n{slide}\n")
            break

with open(r"d:\www\spmb\scratch\slides_details.txt", "w", encoding="utf-8") as f:
    f.writelines(results)

print("Slides details compiled.")
