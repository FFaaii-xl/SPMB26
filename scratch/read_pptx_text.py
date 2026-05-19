with open(r"d:\www\spmb\public\extracted_pptx.txt", "r", encoding="utf-8") as f:
    text = f.read(2000)

print("First 2000 characters of extracted_pptx.txt:")
print("-" * 50)
print(text)
print("-" * 50)
