import re

file_path = r"d:\www\spmb\scratch\jukop_extracted.txt"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Split content by pages to make searching contextual to pages
pages = content.split("--- PAGE ")

keywords = [
    r"smk",
    r"nilai akhir",
    r"afirmasi",
    r"domisili",
    r"kejuaraan",
    r"piagam",
    r"seleksi",
    r"kriteria",
    r"persentase",
    r"kuota"
]

results = []
for page in pages:
    if not page.strip():
        continue
    page_num = page.split(" ---")[0]
    
    # Check for important matches
    matches = []
    # If page contains combinations of words like "nilai akhir" and "smk", or "kejuaraan" and "smk"
    lower_page = page.lower()
    
    # Check if page has important paragraphs
    if "nilai akhir" in lower_page and "smk" in lower_page:
        matches.append("Nilai Akhir (NA) SMK")
    if "kejuaraan" in lower_page or "piagam" in lower_page:
        matches.append("Kejuaraan / Piagam")
    if "afirmasi" in lower_page and ("ats" in lower_page or "miskin" in lower_page or "disabilitas" in lower_page):
        matches.append("Afirmasi (ATS/Miskin/Disabilitas)")
    if "domisili" in lower_page and "smk" in lower_page:
        matches.append("Domisili SMK")
    if "persentase" in lower_page or "kuota" in lower_page:
        matches.append("Kuota / Persentase Jalur")
        
    if matches:
        results.append(f"Page {page_num}: {', '.join(matches)}\n" + page[:1000] + "\n...\n")

# Write matching pages summary
output_path = r"d:\www\spmb\scratch\search_summary.txt"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(f"Found {len(results)} relevant pages context.\n\n")
    f.writelines(results)

print(f"Search complete. Summary written to {output_path}")
