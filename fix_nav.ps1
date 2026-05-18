$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content -replace '<a class="nav-link" href="#">Leaders Talk</a>', '<a class="nav-link" href="leaders-talk.html">Leaders Talk</a>'
    if ($content -cne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Updated $($file.Name)"
    }
}
