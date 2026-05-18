<# 
Fix encoding script - uses hex byte replacement approach
Reads files as raw bytes, finds UTF-8 encoded U+FFFD (ef bf bd) sequences,
and uses context to determine correct replacement.
#>

$dir = $PSScriptRoot
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

$files = @(
    'nvph.html','nvxl-tra.html','nvxl-lay.html','nvxl-luanchuyen.html',
    'nvxl-khac.html','nvxl-kinhdoanh.html','nvxl-botchat.html',
    'nvpttt.html','nvpttt-kinhdoanh.html','nvpttt-botchat.html',
    'fieldsale.html','fieldsale-banhang.html'
)

# Map of corrupted -> correct byte sequences
# Each entry: [hex_pattern, replacement_utf8_string]
# We use a simpler approach: read as UTF8, replace strings with U+FFFD char

$rc = "`u{FFFD}"

# Build replacement pairs array
$pairs = @()

# Helper to add pair
function p($from, $to) { $script:pairs += ,@($from, $to) }

# --- Common nav text ---
p "Trang ch$rc"                       "Trang ch`u{1EE7}"
p "Kh${rc}i V${rc}n ph${rc}ng"       "Kh`u{1ED1}i V`u{0103}n ph`u{00F2}ng"
p "Kh${rc}i Van ph${rc}ng"           "Kh`u{1ED1}i V`u{0103}n ph`u{00F2}ng"
p "Kh${rc}i V${rc}n Ph${rc}ng"       "Kh`u{1ED1}i V`u{0103}n Ph`u{00F2}ng"
p "Kh${rc}i Th${rc} Tr${rc}${rc}ng"  "Kh`u{1ED1}i Th`u{1ECB} Tr`u{01B0}`u{1EDD}ng"
p "Kh${rc}i H${rc}ng N${rc}ng"       "Kh`u{1ED1}i H`u{00E0}ng N`u{1EB7}ng"
p "T${rc}m ki${rc}m kh${rc}a h${rc}c..." "T`u{00EC}m ki`u{1EBF}m kh`u{00F3}a h`u{1ECD}c..."

# Drawer nav items
p "Ch${rc}${rc}ng tr${rc}nh H${rc}i nh${rc}p"  "Ch`u{01B0}`u{01A1}ng tr`u{00EC}nh H`u{1ED9}i nh`u{1EAD}p"
p "Chuong tr${rc}nh H${rc}i nh${rc}p"          "Ch`u{01B0}`u{01A1}ng tr`u{00EC}nh H`u{1ED9}i nh`u{1EAD}p"
p "Nh${rc}n vi${rc}n Cham s${rc}c Kh${rc}ch h${rc}ng" "Nh`u{00E2}n vi`u{00EA}n Ch`u{0103}m s`u{00F3}c Kh`u{00E1}ch h`u{00E0}ng"
p "Nh${rc}n vi${rc}n Field Sale" "Nh`u{00E2}n vi`u{00EA}n Field Sale"
p "Qu${rc}n l${rc} Khu v${rc}c"  "Qu`u{1EA3}n l`u{00FD} Khu v`u{1EF1}c"
p "Nh${rc}n vi${rc}n X${rc} l${rc}" "Nh`u{00E2}n vi`u{00EA}n X`u{1EED} l`u{00FD}"
p "Nh${rc}n vi${rc}n Ph${rc}t tri${rc}n Th${rc} tr${rc}${rc}ng" "Nh`u{00E2}n vi`u{00EA}n Ph`u{00E1}t tri`u{1EC3}n Th`u{1ECB} tr`u{01B0}`u{1EDD}ng"
p "Nh${rc}n vi${rc}n Ph${rc}n h${rc}ng" "Nh`u{00E2}n vi`u{00EA}n Ph`u{00E2}n h`u{00E0}ng"

# Sidebar titles
p "Nh${rc}n vi${rc}n<br>Ph${rc}n h${rc}ng"  "Nh`u{00E2}n vi`u{00EA}n<br>Ph`u{00E2}n h`u{00E0}ng"
p "Nh${rc}n vi${rc}n<br>X`u{1EED} l`u{00FD}$rc"  "Nh`u{00E2}n vi`u{00EA}n<br>X`u{1EED} l`u{00FD}"
p "Nh${rc}n vi${rc}n<br>Ph${rc}t tri${rc}n<br>"  "Nh`u{00E2}n vi`u{00EA}n<br>Ph`u{00E1}t tri`u{1EC3}n<br>"
p "Nh${rc}n vi${rc}n<br>Kinh doanh<br>Th${rc}c d${rc}a" "Nh`u{00E2}n vi`u{00EA}n<br>Kinh doanh<br>Th`u{1EF1}c `u{0111}`u{1ECB}a"

# Sidebar link texts
p "Quy tr${rc}nh x${rc} l${rc} h${rc}ng giao"     "Quy tr`u{00EC}nh x`u{1EED} l`u{00FD} h`u{00E0}ng giao"
p "Quy tr${rc}nh x${rc} l${rc} h${rc}ng l${rc}y"   "Quy tr`u{00EC}nh x`u{1EED} l`u{00FD} h`u{00E0}ng l`u{1EA5}y"
p "Quy tr${rc}nh x${rc} l${rc} h${rc}ng tr${rc}"    "Quy tr`u{00EC}nh x`u{1EED} l`u{00FD} h`u{00E0}ng tr`u{1EA3}"
p "Quy tr${rc}nh x${rc} l${rc} lu${rc}n chuy${rc}n" "Quy tr`u{00EC}nh x`u{1EED} l`u{00FD} lu`u{00E2}n chuy`u{1EC3}n"
p "Quy tr${rc}nh kh${rc}c"  "Quy tr`u{00EC}nh kh`u{00E1}c"
p "Quy tr${rc}nh l${rc}m vi${rc}c"  "Quy tr`u{00EC}nh l`u{00E0}m vi`u{1EC7}c"
p "K${rc} n${rc}ng Kinh doanh"  "K`u{1EF9} n`u{0103}ng Kinh doanh"
p "K${rc} nang Kinh doanh"     "K`u{1EF9} n`u{0103}ng Kinh doanh"
p "Botchat V${rc}n h${rc}nh"   "Botchat V`u{1EAD}n h`u{00E0}nh"

# Mobile chips
p "H${rc}ng giao"     "H`u{00E0}ng giao"
p "H${rc}ng l${rc}y"  "H`u{00E0}ng l`u{1EA5}y"
p "H${rc}ng tr${rc}"  "H`u{00E0}ng tr`u{1EA3}"
p "Lu${rc}n chuy${rc}n" "Lu`u{00E2}n chuy`u{1EC3}n"

# Role titles
p "NV Ph${rc}t tri${rc}n" "NV Ph`u{00E1}t tri`u{1EC3}n"
p "NV Kinh doanh Th${rc}c d${rc}a" "NV Kinh doanh Th`u{1EF1}c `u{0111}`u{1ECB}a"

# Breadcrumb separator
p ">${rc}</span>" ">›</span>"

# Section/card titles
p "Ki${rc}n th${rc}c T" "Ki`u{1EBF}n th`u{1EE9}c T"
p "Giao h${rc}ng"  "Giao h`u{00E0}ng"
p "L${rc}y h${rc}ng" "L`u{1EA5}y h`u{00E0}ng"
p "Quy d${rc}nh v${rc} POD" "Quy `u{0111}`u{1ECB}nh v`u{1EC1} POD"
p "Quy tr${rc}nh Check-in" "Quy tr`u{00EC}nh Check-in"
p "Xem luong t${rc}m t${rc}nh" "Xem l`u{01B0}`u{01A1}ng t`u{1EA1}m t`u{00ED}nh"
p "Luong t${rc}m t${rc}nh" "L`u{01B0}`u{01A1}ng t`u{1EA1}m t`u{00ED}nh"
p "Gi${rc}i tr${rc}nh ZNS" "Gi`u{1EA3}i tr`u{00EC}nh ZNS"
p "Quy tr${rc}nh giao h${rc}ng" "Quy tr`u{00EC}nh giao h`u{00E0}ng"
p "Quy tr${rc}nh l${rc}y h${rc}ng" "Quy tr`u{00EC}nh l`u{1EA5}y h`u{00E0}ng"

# NVPH cards
p "N${rc}i quy l${rc}m vi${rc}c" "N`u{1ED9}i quy l`u{00E0}m vi`u{1EC7}c"
p "N${rc}i quy"  "N`u{1ED9}i quy"
p "Nh${rc}p h${rc}ng" "Nh`u{1EAD}p h`u{00E0}ng"
p "X${rc} l${rc} h${rc}ng nh${rc}p" "X`u{1EED} l`u{00FD} h`u{00E0}ng nh`u{1EAD}p"
p "${rc}${rc} t${rc}i" "`u{0110}`u{1ED5} t`u{1EA3}i"
p "R${rc} h${rc}ng/C${rc}p h${rc}ng t${rc}i Feeder" "R`u{00E3} h`u{00E0}ng/C`u{1EA5}p h`u{00E0}ng t`u{1EA1}i Feeder"
p "${rc}${rc}ng ki${rc}n t${rc}i Chute" "`u{0110}`u{00F3}ng ki`u{1EC7}n t`u{1EA1}i Chute"
p "${rc}${rc}ng ki${rc}n" "`u{0110}`u{00F3}ng ki`u{1EC7}n"
p "Xu${rc}t ki${rc}n" "Xu`u{1EA5}t ki`u{1EC7}n"
p "An to${rc}n lao d${rc}ng" "An to`u{00E0}n lao `u{0111}`u{1ED9}ng"
p "C${rc}c l${rc}i/ s${rc} c${rc} thu${rc}ng g${rc}p" "C`u{00E1}c l`u{1ED7}i/ s`u{1EF1} c`u{1ED1} th`u{01B0}`u{1EDD}ng g`u{1EB7}p"
p "S${rc} c${rc}" "S`u{1EF1} c`u{1ED1}"
p "B${rc}t d${rc}u h${rc}c" "B`u{1EAF}t `u{0111}`u{1EA7}u h`u{1ECD}c"
p "10 ph${rc}t" "10 ph`u{00FA}t"
p "20 ph${rc}t" "20 ph`u{00FA}t"
p "15 ph${rc}t" "15 ph`u{00FA}t"
p "2 ph${rc}t"  "2 ph`u{00FA}t"

# NVXL-LAY cards
p "G${rc}n don l${rc}y"  "G`u{00E1}n `u{0111}`u{01A1}n l`u{1EA5}y"
p "G${rc}N ${rc}ON L${rc}Y" "G`u{00C1}N `u{0110}ON L`u{1EA4}Y"
p "B${rc}n ki${rc}m"  "B`u{1EAF}n ki`u{1EC3}m"
p "B${rc}N KI${rc}M ${rc}ON H${rc}NG L${rc}Y" "B`u{1EAE}N KI`u{1EC2}M `u{0110}ON H`u{00C0}NG L`u{1EA4}Y"
p "Nh${rc}n h${rc}ng t${rc}i Buu c${rc}c" "Nh`u{1EAD}n h`u{00E0}ng t`u{1EA1}i B`u{01B0}u c`u{1EE5}c"
p "NH${rc}N H${rc}NG T${rc}I BUU C${rc}C" "NH`u{1EAC}N H`u{00C0}NG T`u{1EA0}I B`u{01AF}U C`u{1EE4}C"
p "T${rc}ng h${rc}p quy tr${rc}nh x${rc} l${rc} h${rc}ng l${rc}y" "T`u{1ED5}ng h`u{1EE3}p quy tr`u{00EC}nh x`u{1EED} l`u{00FD} h`u{00E0}ng l`u{1EA5}y"
p "NH${rc}N VI${rc}N X${rc} L${rc}" "NH`u{00C2}N VI`u{00CA}N X`u{1EEC} L`u{00DD}"
p "QUY TR${rc}NH X${rc} L${rc} H${rc}NG L${rc}Y" "QUY TR`u{00CC}NH X`u{1EEC} L`u{00DD} H`u{00C0}NG L`u{1EA4}Y"

# NVXL-TRA cards
p "Ph${rc}n lo${rc}i don h${rc}ng" "Ph`u{00E2}n lo`u{1EA1}i `u{0111}`u{01A1}n h`u{00E0}ng"
p "PH${rc}N LO${rc}I ${rc}ON H${rc}NG TR${rc}" "PH`u{00C2}N LO`u{1EA0}I `u{0110}ON H`u{00C0}NG TR`u{1EA2}"
p "In m${rc} don"  "In m`u{00E3} `u{0111}`u{01A1}n"
p "IN M${rc} ${rc}ON TR${rc}" "IN M`u{00C3} `u{0110}ON TR`u{1EA2}"
p "T${rc}ng h${rc}p quy tr${rc}nh x${rc} l${rc} h${rc}ng tr${rc}" "T`u{1ED5}ng h`u{1EE3}p quy tr`u{00EC}nh x`u{1EED} l`u{00FD} h`u{00E0}ng tr`u{1EA3}"
p "QUY TR${rc}NH X${rc} L${rc} H${rc}NG TR${rc}" "QUY TR`u{00CC}NH X`u{1EEC} L`u{00DD} H`u{00C0}NG TR`u{1EA2}"
p "T${rc}NG H${rc}P" "T`u{1ED4}NG H`u{1EE2}P"

# NVXL-LUANCHUYEN cards
p "QUY TR${rc}NH LU${rc}N CHUY${rc}N" "QUY TR`u{00CC}NH LU`u{00C2}N CHUY`u{1EC2}N"
p "${rc}${rc}NG KI${rc}N" "`u{0110}`u{00D3}NG KI`u{1EC6}N"
p "XU${rc}T KI${rc}N" "XU`u{1EA4}T KI`u{1EC6}N"
p "T${rc}ng h${rc}p quy tr${rc}nh x${rc} l${rc} lu${rc}n chuy${rc}n" "T`u{1ED5}ng h`u{1EE3}p quy tr`u{00EC}nh x`u{1EED} l`u{00FD} lu`u{00E2}n chuy`u{1EC3}n"

# NVXL-KHAC cards  
p "X${rc} l${rc}${rc} Ticket" "X`u{1EED} l`u{00FD} Ticket"
p "X${rc} L${rc} TICKET" "X`u{1EEC} L`u{00DD} TICKET"
p "T${rc}o phi${rc}u Qu${rc}n l${rc} R${rc}i ro" "T`u{1EA1}o phi`u{1EBF}u Qu`u{1EA3}n l`u{00FD} R`u{1EE7}i ro"
p "T${rc}O PHI${rc}U QLRR" "T`u{1EA0}O PHI`u{1EBE}U QLRR"

# NVXL-KINHDOANH/NVPTTT-KINHDOANH cards
p "Cham s${rc}c Kh${rc}ch h${rc}ng l${rc}n" "Ch`u{0103}m s`u{00F3}c Kh`u{00E1}ch h`u{00E0}ng l`u{1EDB}n"
p "Cham s${rc}c Kh${rc}ch h${rc}ng l${rc}" "Ch`u{0103}m s`u{00F3}c Kh`u{00E1}ch h`u{00E0}ng l`u{1EDB}n"
p "Cham s${rc}c Kh${rc}ch h${rc}ng" "Ch`u{0103}m s`u{00F3}c Kh`u{00E1}ch h`u{00E0}ng"
p "CHAM S${rc}C KH${rc}CH H${rc}NG L${rc}N" "CH`u{0102}M S`u{00D3}C KH`u{00C1}CH H`u{00C0}NG L`u{1EDA}N"
p "CHAM S${rc}C KH${rc}CH H${rc}NG" "CH`u{0102}M S`u{00D3}C KH`u{00C1}CH H`u{00C0}NG"
p "K${rc} n${rc}ng b${rc}n h${rc}ng" "K`u{1EF9} n`u{0103}ng b`u{00E1}n h`u{00E0}ng"

# FIELDSALE
p "S${rc}n ph${rc}m Th" "S`u{1EA3}n ph`u{1EA9}m Th"
p "Quy tr${rc}nh V${rc}n h${rc}nh GHN" "Quy tr`u{00EC}nh V`u{1EAD}n h`u{00E0}nh GHN"
p "Ch${rc}nh s${rc}ch" "Ch`u{00ED}nh s`u{00E1}ch"
p "C${rc}ng c${rc}" "C`u{00F4}ng c`u{1EE5}"
p "Ph${rc}n m${rc}m Qu${rc}n l${rc} b${rc}n h${rc}ng" "Ph`u{1EA7}n m`u{1EC1}m Qu`u{1EA3}n l`u{00FD} b`u{00E1}n h`u{00E0}ng"
p "B${rc}n h${rc}ng th${rc}c d${rc}a" "B`u{00E1}n h`u{00E0}ng th`u{1EF1}c `u{0111}`u{1ECB}a"
p "H${rc}p t${rc}c li${rc}n ph${rc}ng ban" "H`u{1EE3}p t`u{00E1}c li`u{00EA}n ph`u{00F2}ng ban"
p "B${rc}n h${rc}ng" "B`u{00E1}n h`u{00E0}ng"
p "Th${rc}c d${rc}a" "Th`u{1EF1}c `u{0111}`u{1ECB}a"

# BOTCHAT text
p "Botchat l${rc} " "Botchat l`u{00E0} "
p "Tr${rc} l${rc} V${rc}n h${rc}nh" "Tr`u{1EE3} l`u{00FD} V`u{1EAD}n h`u{00E0}nh"
p "Gi${rc}i d${rc}p m${rc}i th${rc}c m${rc}c v${rc} v${rc}n h${rc}nh t${rc}i GHN" "Gi`u{1EA3}i `u{0111}`u{00E1}p m`u{1ECd}i th`u{1EAF}c m`u{1EAF}c v`u{1EC1} v`u{1EAD}n h`u{00E0}nh t`u{1EA1}i GHN"
p "${rc}${rc} 2026" "`u{00A9} 2026"

# Footer
p "Ph${rc}ng H${rc}c t${rc}p v${rc} Ph${rc}t tri${rc}n" "Ph`u{00F2}ng H`u{1ECd}c t`u{1EAD}p v`u{00E0} Ph`u{00E1}t tri`u{1EC3}n"
p "Tr${rc} s${rc}: Rivera Park, 7/28 Th${rc}nh Th${rc}i, Phu${rc}ng Di${rc}n H${rc}ng TP. HCM" "Tr`u{1EE5} s`u{1EDF}: Rivera Park, 7/28 Th`u{00E0}nh Th`u{00E1}i, Ph`u{01B0}`u{1EDD}ng Di`u{00EA}n H`u{1ED3}ng TP. HCM"
p "Nguy${rc}n Ng${rc}c Mai Tr${rc}m" "Nguy`u{1EC5}n Ng`u{1ECd}c Mai Tr`u{00E2}m"

# Emoji replacements
p "???" "`u{1F5C2}`u{FE0F}"

Write-Host "Starting encoding fix across $($files.Count) files..."

foreach ($f in $files) {
    $fp = Join-Path $dir $f
    if (-not (Test-Path $fp)) { Write-Host "SKIP: $f"; continue }
    
    $text = [System.IO.File]::ReadAllText($fp, [System.Text.Encoding]::UTF8)
    $original = $text
    $appliedCount = 0
    
    foreach ($pair in $pairs) {
        $from = $pair[0]
        $to = $pair[1]
        if ($text.Contains($from)) {
            $text = $text.Replace($from, $to)
            $appliedCount++
        }
    }
    
    if ($text -ne $original) {
        [System.IO.File]::WriteAllText($fp, $text, $utf8NoBom)
        
        $remaining = ($text.ToCharArray() | Where-Object { $_ -eq $rc }).Count
        Write-Host ("FIXED: {0} ({1} patterns applied, {2} remaining RCs)" -f $f, $appliedCount, $remaining)
    } else {
        Write-Host "NO CHANGES: $f"
    }
}

Write-Host "Done!"
