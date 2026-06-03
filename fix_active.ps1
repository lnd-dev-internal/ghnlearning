$ErrorActionPreference = "Stop"

# Fix leaders-talk.html: remove active from Trang chu, keep active on Leaders Talk
$content = Get-Content 'leaders-talk.html' -Raw -Encoding UTF8
$content = $content -replace '<a class="nav-link active" href="homepage\.html">', '<a class="nav-link" href="homepage.html">'
$content = $content -replace '<a class="nav-link" href="leaders-talk\.html">Leaders Talk</a>', '<a class="nav-link active" href="leaders-talk.html">Leaders Talk</a>'
Set-Content 'leaders-talk.html' $content -Encoding UTF8

# Fix workshop.html: remove active from Trang chu, keep active on Leaders Talk  
$content = Get-Content 'workshop.html' -Raw -Encoding UTF8
$content = $content -replace '<a class="nav-link active" href="homepage\.html">', '<a class="nav-link" href="homepage.html">'
$content = $content -replace '<a class="nav-link" href="leaders-talk\.html">Leaders Talk</a>', '<a class="nav-link active" href="leaders-talk.html">Leaders Talk</a>'
Set-Content 'workshop.html' $content -Encoding UTF8

# Fix dien-gia.html: remove active from Trang chu, keep active on Leaders Talk
$content = Get-Content 'dien-gia.html' -Raw -Encoding UTF8
$content = $content -replace '<a class="nav-link active" href="homepage\.html">', '<a class="nav-link" href="homepage.html">'
$content = $content -replace '<a class="nav-link" href="leaders-talk\.html">Leaders Talk</a>', '<a class="nav-link active" href="leaders-talk.html">Leaders Talk</a>'
Set-Content 'dien-gia.html' $content -Encoding UTF8

Write-Host "Active states fixed!"
