$ErrorActionPreference = "Stop"

$scrollCss = @"

    /* ── Smooth scroll + strip anchor offset ── */
    html { scroll-behavior: smooth; }
    #strip-nav { scroll-margin-top: 0px; }

"@

$files = @("leaders-talk.html", "workshop.html", "dien-gia.html")

foreach ($file in $files) {
    $content = Get-Content $file -Raw -Encoding UTF8
    # Insert before </style>
    $content = $content -replace '(</style>)', "$scrollCss`$1"
    Set-Content $file $content -Encoding UTF8
    Write-Host "Updated $file"
}

Write-Host "All done!"
