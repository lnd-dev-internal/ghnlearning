import os
import re

html_path = r'c:\Users\Huawei\.gemini\antigravity\scratch\ghn-portal\dien-gia.html'

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Get all images in the directory
files = os.listdir(r'c:\Users\Huawei\.gemini\antigravity\scratch\ghn-portal')

# Mapping from data-speaker to filename
speaker_map = {
    "luong-dung-nhan": "Lương Dũng Nhân",
    "hoang-giang": "Hoàng Giang",
    "do-dinh-thuong": "Đỗ Đình Thương",
    "pham-tu-thu": "Phạm Từ Thứ",
    "nguyen-lam-hoang-yen": "Nguyễn Lâm Hoàng Yên",
    "pham-hoang-long": "Phạm Hoàng Long",
    "thom-tran": "Thơm Trần", # Will guess if not found
    "tran-the-trung": "Trần Thế Trung",
    "giap-duc-thang": "Giáp Đức Thắng",
    "nguyen-minh-trung": "Nguyễn Minh Trung",
    "nhi-nguyen": "Nhi Nguyễn",
    "le-thanh-binh": "Lê Thanh Bính",
    "kim-le-huy": "Kim Lê Huy",
    "nguyen-hoang-nam": "Nguyễn Hoàng Nam",
    "ngan-tran": "Ngân Trần",
    "cao-tuan-minh": "Cao Tuấn Minh"
}

import unicodedata

def normalize(s):
    return unicodedata.normalize('NFC', s).lower().replace(' ', '')

image_files = [f for f in files if f.endswith(('.png', '.jpg', '.jpeg'))]

file_map = {}
for sf in image_files:
    file_map[normalize(sf.rsplit('.', 1)[0])] = sf

# Find all <article class="spk-card-new" data-speaker="...">
articles = re.finditer(r'<article class="spk-card-new"[^>]*data-speaker="([^"]+)">([\s\S]*?)</article>', html)

for match in articles:
    speaker_id = match.group(1)
    content = match.group(0)
    
    # Try to find the matching image
    target_name = None
    if speaker_id in speaker_map:
        norm_name = normalize(speaker_map[speaker_id])
        if norm_name in file_map:
            target_name = file_map[norm_name]
        else:
            # Try partial match or fallback
            for fn in image_files:
                if normalize(fn.rsplit('.', 1)[0]) == norm_name:
                    target_name = fn
                    break
    
    if not target_name:
        target_name = f"{speaker_map.get(speaker_id, speaker_id)}.png" # fallback

    # Replace the background-image url
    # It currently looks like: background-image: url('...');
    new_content = re.sub(r"background-image:\s*url\('[^']+'\);", f"background-image: url('{target_name}');", content)
    
    # Adding background-position: center 20%; or something to center the face?
    # The user said "căn chỉnh để mặt người chính giữa khung hình" -> center center is usually best, but let's make sure it's explicit.
    # Actually I will just replace the url. The CSS already has background-position: center;
    
    html = html.replace(content, new_content)

# Make sure background-position is center
html = html.replace('background-position: center;', 'background-position: center 15%; /* adjust if faces are cut off, usually top-center is better for portraits */')
# Wait, "chính giữa khung hình" means exact center. Let's stick to 'center'.
html = html.replace('background-position: center 15%; /* adjust if faces are cut off, usually top-center is better for portraits */', 'background-position: center;')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Done. Here are the assignments:")
for spk, name in speaker_map.items():
    norm_name = normalize(name)
    print(f"{spk}: {file_map.get(norm_name, 'NOT FOUND -> ' + name)}")
