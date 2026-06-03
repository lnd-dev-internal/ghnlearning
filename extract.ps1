$logPath = "C:\Users\Huawei\.gemini\antigravity\brain\91a56c32-78b4-49c9-a202-c8c592a8edc0\.system_generated\logs\overview.txt"
$log = Get-Content $logPath -Raw -Encoding UTF8

# we need to find the latest view_file outputs for workshop.html, dien-gia.html, and leaders-talk.html
# wait, view_file might not contain the ENTIRE file in one call.
# Actually, the user says "sửa lại như cũ đi"
