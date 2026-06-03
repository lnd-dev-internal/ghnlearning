# Replace navbar + add search JS in leaders-talk.html, dien-gia.html, workshop.html
$utf8 = New-Object System.Text.UTF8Encoding($false)
$newNavbar = [System.IO.File]::ReadAllText("navbar_template.html", $utf8)

$searchScript = @'
<script>
function doSearch(){var q=document.getElementById('searchInput');if(!q)return;var v=q.value.trim().toLowerCase();if(!v)return;var pages={
'hoi nhap':'newbie.html','onboarding':'newbie.html','tan thu':'newbie.html',
'cskh':'cskh.html','cham soc':'cskh.html','khach hang':'cskh.html','khieu nai':'cskh-khieunai.html',
'field sale':'fieldsale.html','ban hang':'fieldsale-banhang.html','fieldsale':'fieldsale.html',
'am':'am.html','quan ly':'am.html','khu vuc':'am.html',
'xu ly':'nvxl.html','nvxl':'nvxl.html',
'nvpttt':'nvpttt.html','phat trien':'nvpttt.html','thi truong':'index.html',
'phan hang':'nvph.html','nvph':'nvph.html',
'hang nang':'hangnang.html','freight':'freight.html',
'leaders':'leaders-talk.html','talk':'leaders-talk.html',
'workshop':'workshop.html','dien gia':'dien-gia.html',
'van phong':'vanphong.html','homepage':'homepage.html','trang chu':'homepage.html',
'ai':'leaders-talk.html','leadership':'leaders-talk.html'
};for(var k in pages){if(v.indexOf(k)!==-1||k.indexOf(v)!==-1){window.location.href=pages[k];return;}}alert('Khong tim thay khoa hoc phu hop. Vui long thu lai.');}
</script>
'@

$files = @('leaders-talk.html', 'dien-gia.html', 'workshop.html')

foreach ($file in $files) {
    $c = [System.IO.File]::ReadAllText($file, $utf8)
    
    # Find and replace old navbar: <nav class="navbar">...</nav>
    $navStart = $c.IndexOf('<nav class="navbar">')
    $navEnd = $c.IndexOf('</nav>', $navStart) + 6
    
    if ($navStart -ge 0 -and $navEnd -gt $navStart) {
        $before = $c.Substring(0, $navStart)
        $after = $c.Substring($navEnd)
        $c = $before + $newNavbar + $after
        Write-Host "${file}: Replaced navbar (was $($navEnd - $navStart) chars)"
    } else {
        Write-Host "${file}: WARNING - navbar not found!"
    }
    
    # Add search script before </body> if not already present
    if (-not $c.Contains('doSearch')) {
        $c = $c -replace '</body>', "$searchScript`n</body>"
        Write-Host "${file}: Added search script"
    } else {
        Write-Host "${file}: Search script already present"
    }
    
    [System.IO.File]::WriteAllText($file, $c, $utf8)
}

# Verify
foreach ($file in $files) {
    $v = [System.IO.File]::ReadAllText($file, $utf8)
    $hasDropdowns = ([regex]::Matches($v, 'nav-menu')).Count
    $hasSearch = $v.Contains('doSearch')
    $hasHangNang = $v.Contains('nav-trigger" href="hangnang.html"')
    Write-Host "`n${file}: dropdowns=$hasDropdowns search=$hasSearch hangNangDropdown=$hasHangNang"
}
