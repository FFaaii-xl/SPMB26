import os
from pypdf import PdfReader

pdf_path = r"d:\www\spmb\public\jukop.pdf"
output_path = r"d:\www\spmb\scratch\jukop_extracted.txt"

print(f"Reading {pdf_path}...")
reader = PdfReader(pdf_path)
total_pages = len(reader.pages)
print(f"Total pages: {total_pages}")

extracted_text = []
for i, page in enumerate(reader.pages):
    print(f"Extracting page {i+1}/{total_pages}...")
    text = page.extract_text()
    if text:
        extracted_text.append(f"--- PAGE {i+1} ---\n{text}\n")

os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, "w", encoding="utf-8") as f:
    f.writelines(extracted_text)

print(f"Successfully extracted all text to {output_path}")
