import os
import re

def update_html_files():
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Remove any existing icon links just in case to avoid duplicates
                content = re.sub(r'<link[^>]*rel=["\']icon["\'][^>]*>\n?', '', content, flags=re.IGNORECASE)
                content = re.sub(r'<link[^>]*rel=["\']shortcut icon["\'][^>]*>\n?', '', content, flags=re.IGNORECASE)
                
                # Replace title and append the icon link immediately after
                new_title_block = '<title>GHN Learning</title>\n<link rel="icon" type="image/png" href="logo-dark.png">'
                content = re.sub(r'<title>.*?</title>', new_title_block, content, flags=re.DOTALL | re.IGNORECASE)
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {filepath}")

if __name__ == "__main__":
    update_html_files()
