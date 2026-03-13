from pypdf import PdfReader

reader = PdfReader('/mnt/c/Users/User/Coding-2026/portfolio/Curriculum/Curric-AI-ML Develop-RDonoso-2026 (Engl).pdf')
text = ""
for p in reader.pages:
    text += p.extract_text() + "\n"
    
with open('/mnt/c/Users/User/Coding-2026/portfolio/Curriculum/pdf_text.txt', 'w', encoding='utf-8') as f:
    f.write(text)
