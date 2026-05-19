from pypdf import PdfReader

reader = PdfReader(r"d:\www\spmb\public\jukop.pdf")
print("PDF Metadata:")
print(reader.metadata)

print("\nPage text character counts:")
for i in range(min(10, len(reader.pages))):
    text = reader.pages[i].extract_text()
    print(f"Page {i+1}: length = {len(text) if text else 0}")
