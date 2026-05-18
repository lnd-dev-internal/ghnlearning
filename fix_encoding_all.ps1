$ErrorActionPreference = "Stop"

# Read file as UTF-8, do replacements, write back
function Fix-File {
    param([string]$FilePath, [hashtable]$Replacements)
    
    if (-not (Test-Path $FilePath)) {
        Write-Host "  SKIP: $FilePath (not found)"
        return
    }
    
    $content = [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8)
    $original = $content
    $count = 0
    
    foreach ($key in $Replacements.Keys) {
        if ($content.Contains($key)) {
            $content = $content.Replace($key, $Replacements[$key])
            $count++
        }
    }
    
    if ($content -ne $original) {
        # Write as UTF-8 without BOM
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($FilePath, $content, $utf8NoBom)
        Write-Host "  FIXED: $(Split-Path $FilePath -Leaf) ($count replacements)"
    } else {
        Write-Host "  NO CHANGES: $(Split-Path $FilePath -Leaf)"
    }
}

$dir = $PSScriptRoot

# U+FFFD is the replacement character (shows as ? in some displays)
# We need to match the exact corrupted strings in the files

Write-Host "=== Fixing nvph.html ==="
$r = @{}
# Title
$r['<title>Nh' + [char]0xFFFD + 'n vi' + [char]0xFFFD + 'n Ph' + [char]0xFFFD + 'n h' + [char]0xFFFD + 'ng - Quy tr' + [char]0xFFFD + 'nh l' + [char]0xFFFD + 'm vi' + [char]0x3F + 'c</title>'] = '<title>Nhân viên Phân hàng - Quy trình làm việc</title>'
# Navbar
$r['>Trang ch' + [char]0xFFFD + '</a>'] = '>Trang chủ</a>'
$r['>Kh' + [char]0xFFFD + 'i V' + [char]0x61 + 'n Ph' + [char]0xFFFD + 'ng</a>'] = '>Khối Văn Phòng</a>'
$r['>Kh' + [char]0xFFFD + 'i Th' + [char]0xFFFD + ' Tr' + [char]0xFFFD + [char]0xFFFD + 'ng</a>'] = '>Khối Thị Trường</a>'
$r['>Kh' + [char]0xFFFD + 'i H' + [char]0xFFFD + 'ng N' + [char]0xFFFD + 'ng</a>'] = '>Khối Hàng Nặng</a>'
$r['T' + [char]0xFFFD + 'm ki' + [char]0xFFFD + 'm kh' + [char]0xFFFD + 'a h' + [char]0xFFFD + 'c...'] = 'Tìm kiếm khóa học...'
# Drawer nav
$r['>Trang ch' + [char]0xFFFD + '</div>'] = '>Trang chủ</div>'
$r['>Kh' + [char]0xFFFD + 'i V' + [char]0x61 + 'n ph' + [char]0xFFFD + 'ng</div>'] = '>Khối Văn phòng</div>'
$r['>Ch' + [char]0xFFFD + [char]0xFFFD + 'ng tr' + [char]0xFFFD + 'nh H' + [char]0xFFFD + 'i nh' + [char]0xFFFD + 'p</a>'] = '>Chương trình Hội nhập</a>'
$r['>Nh' + [char]0xFFFD + 'n vi' + [char]0xFFFD + 'n Ch' + [char]0x61 + 'm s' + [char]0xFFFD + 'c Kh' + [char]0xFFFD + 'ch h' + [char]0xFFFD + 'ng</a>'] = '>Nhân viên Chăm sóc Khách hàng</a>'
$r['>Nh' + [char]0xFFFD + 'n vi' + [char]0xFFFD + 'n Field Sale</a>'] = '>Nhân viên Field Sale</a>'
$r['>Kh' + [char]0xFFFD + 'i Th' + [char]0xFFFD + ' Tr' + [char]0xFFFD + [char]0xFFFD + 'ng</div>'] = '>Khối Thị Trường</div>'
$r['>Qu' + [char]0xFFFD + 'n l' + [char]0xFFFD + ' Khu v' + [char]0xFFFD + 'c</a>'] = '>Quản lý Khu vực</a>'
$r['>Nh' + [char]0xFFFD + 'n vi' + [char]0xFFFD + 'n X' + [char]0xFFFD + ' l' + [char]0xFFFD + '</a>'] = '>Nhân viên Xử lý</a>'
$r['>Nh' + [char]0xFFFD + 'n vi' + [char]0xFFFD + 'n Ph' + [char]0xFFFD + 't tri' + [char]0xFFFD + 'n Th' + [char]0xFFFD + ' tr' + [char]0xFFFD + [char]0xFFFD + 'ng</a>'] = '>Nhân viên Phát triển Thị trường</a>'
$r['>Nh' + [char]0xFFFD + 'n vi' + [char]0xFFFD + 'n Ph' + [char]0xFFFD + 'n h' + [char]0xFFFD + 'ng</a>'] = '>Nhân viên Phân hàng</a>'
$r['>Kh' + [char]0xFFFD + 'i H' + [char]0xFFFD + 'ng N' + [char]0xFFFD + 'ng</div>'] = '>Khối Hàng Nặng</div>'
# Sidebar title
$r['>Nh' + [char]0xFFFD + 'n vi' + [char]0xFFFD + 'n<br>Ph' + [char]0xFFFD + 'n h' + [char]0xFFFD + 'ng</div>'] = '>Nhân viên<br>Phân hàng</div>'
# Sidebar link
$r['>Quy tr' + [char]0xFFFD + 'nh l' + [char]0xFFFD + 'm vi' + [char]0xFFFD + 'c</span>'] = '>Quy trình làm việc</span>'
# Mobile role
$r['>Nh' + [char]0xFFFD + 'n vi' + [char]0xFFFD + 'n Ph' + [char]0xFFFD + 'n h' + [char]0xFFFD + 'ng</div>'] = '>Nhân viên Phân hàng</div>'
# Breadcrumb
$r['>Kh' + [char]0xFFFD + 'i Th' + [char]0xFFFD + ' Tr' + [char]0xFFFD + [char]0xFFFD + 'ng</a>'] = '>Khối Thị Trường</a>'
$r['>' + [char]0xFFFD + '</span>'] = '>›</span>'
$r['>Quy tr' + [char]0xFFFD + 'nh l' + [char]0xFFFD + 'm vi' + [char]0xFFFD + 'c</span>'] = '>Quy trình làm việc</span>'
$r['>Quy tr' + [char]0xFFFD + 'nh l' + [char]0xFFFD + 'm vi' + [char]0xFFFD + 'c</h1>'] = '>Quy trình làm việc</h1>'
# Footer
$r['>Ph' + [char]0xFFFD + 'ng H' + [char]0xFFFD + 'c t' + [char]0xFFFD + 'p v' + [char]0xFFFD + ' Ph' + [char]0xFFFD + 't tri' + [char]0xFFFD + 'n</h3>'] = '>Phòng Học tập và Phát triển</h3>'
# Cards - will handle via broader approach
Fix-File -FilePath (Join-Path $dir "nvph.html") -Replacements $r

Write-Host "`nDone with targeted fixes. Now applying broader approach..."

# For each file, let's do a comprehensive search-and-replace using
# known Vietnamese word patterns

# Actually, the most reliable approach is to rewrite the corrupted 
# text-content sections of each file entirely.
# Let me take a different approach.
