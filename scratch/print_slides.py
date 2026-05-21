with open(r"d:\www\spmb\public\extracted_pptx.txt", "r", encoding="utf-8") as f:
    content = f.read()

slides = content.split("=========================================\n")

target_slides = ["7", "8", "9", "10", "11", "13", "14", "15", "16", "17"]

for slide in slides:
    for num in target_slides:
        if f"[ SLIDE {num} ]" in slide:
            print(f"=== SLIDE {num} ===")
            print(slide.strip())
            print("="*60)
            break
