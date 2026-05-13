$leaders = Get-Content "leaders-talk.html" -Raw
$workshop = Get-Content "workshop.html" -Raw
$diengia = Get-Content "dien-gia.html" -Raw

# 1. Extract CSS
$wsCssMatch = [regex]::Match($workshop, '(?s)/\*\s*── Workshop List ──\s*\*/.*?(?=/\*\s*── Footer ──\s*\*/)')
$wsCss = $wsCssMatch.Value

$dgCssMatch = [regex]::Match($diengia, '(?s)/\*\s*── Speaker Cards Section \(new design\) ──\s*\*/.*?(?=/\*\s*── Footer ──\s*\*/)')
$dgCss = $dgCssMatch.Value

# 2. Extract HTML sections
$upcomingMatch = [regex]::Match($leaders, '(?s)<!-- ── Upcoming Section ── -->.*?(\n    </section>)')
$upcomingHtml = $upcomingMatch.Value

$wsHtmlMatch = [regex]::Match($workshop, '(?s)<!-- ── Workshop List ── -->.*?(\n    </section>)')
$wsHtml = $wsHtmlMatch.Value

$dgHtmlMatch = [regex]::Match($diengia, '(?s)<!-- ── Speaker Cards Section \(new design\) ── -->.*?(\n    </section>)')
$dgHtml = $dgHtmlMatch.Value

$dgModalMatch = [regex]::Match($diengia, '(?s)<!-- ── Profile Modal ── -->.*?</div>\s*</div>\s*</div>')
$dgModalHtml = $dgModalMatch.Value

$dgScriptMatch = [regex]::Match($diengia, '(?s)<script>\s*const speakerData = .*?// Page Transitions.*?</style>')
# Wait, page transitions shouldn't be included. Just the modal script.
$dgScriptOnly = [regex]::Match($diengia, '(?s)<script>\s*const speakerData = .*?(?=</script>)')
$scriptHtml = $dgScriptOnly.Value + "</script>"

# 3. Build new combined HTML
# Replace the style block in leaders-talk
$newHtml = $leaders -replace '(?s)(/\*\s*── Footer ──\s*\*/)', "$wsCss`n    $dgCss`n    `$1"

# Create Tab structure
$stripHtml = @"
    <!-- ── Sub-tab Strip ── -->
    <nav class="strip" aria-label="Leaders Talk sections">
      <a class="tab-link active" href="leaders-talk.html" data-target="tab-overview">Tổng quan</a>
      <a class="tab-link" href="workshop.html" data-target="tab-workshop">Workshop</a>
      <a class="tab-link" href="dien-gia.html" data-target="tab-speakers">Diễn giả</a>
    </nav>

    <div id="tab-overview" class="tab-content" style="display: block;">
$upcomingHtml
    </div>

    <div id="tab-workshop" class="tab-content" style="display: none;">
$wsHtml
    </div>

    <div id="tab-speakers" class="tab-content" style="display: none;">
$dgHtml
$dgModalHtml
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('.strip .tab-link');
        const contents = document.querySelectorAll('.tab-content');

        function activateTab(targetId) {
          links.forEach(l => l.classList.remove('active'));
          contents.forEach(c => c.style.display = 'none');
          
          const activeLink = document.querySelector(`.strip .tab-link[data-target="` + targetId + `"]`);
          if (activeLink) activeLink.classList.add('active');
          
          const targetContent = document.getElementById(targetId);
          if (targetContent) targetContent.style.display = 'block';
        }

        // Determine active tab by current filename
        const path = window.location.pathname;
        if (path.includes('workshop.html')) {
          activateTab('tab-workshop');
        } else if (path.includes('dien-gia.html')) {
          activateTab('tab-speakers');
        } else {
          activateTab('tab-overview');
        }

        // Add click listeners to switch tabs without reloading
        links.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            activateTab(targetId);
            history.pushState(null, '', link.getAttribute('href'));
          });
        });
      });
    </script>

$scriptHtml
"@

# Replace the strip and everything after it (until </main>)
$newHtml = $newHtml -replace '(?s)<!-- ── Sub-tab Strip ── -->.*?(?=</main>)', $stripHtml

# Write to all three files
Set-Content -Path "leaders-talk.html" -Value $newHtml -Encoding UTF8
Set-Content -Path "workshop.html" -Value $newHtml -Encoding UTF8
Set-Content -Path "dien-gia.html" -Value $newHtml -Encoding UTF8

Write-Host "Done combining files!"
