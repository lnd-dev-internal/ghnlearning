import re

with open("/Users/nguyenthihuynhnhu/Desktop/LandingPage-Trang chủ/dien-gia.html", "r") as f:
    html = f.read()

# Extract everything up to the end of <!-- ── Benefits Section ── -->
match = re.search(r'(.*?<!-- ── Sub-tab Strip ── -->)', html, re.DOTALL)
top_part = match.group(1) if match else html

strip_nav = """
    <!-- ── Sub-tab Strip ── -->
    <nav class="strip" aria-label="Leaders Talk sections">
      <a href="leaders-talk.html">Tổng quan</a>
      <a class="active" href="workshop.html">Workshop</a>
      <a href="dien-gia.html">Diễn giả</a>
    </nav>
"""

workshops = [
    ("TASK MANAGEMENT x ANTIGRAVITY", "16/04/2026"),
    ("MÁY VẬN HÀNH, NGƯỜI KIẾN TẠO", "20/03/2026"),
    ("AI IN SHOW - PRODUCT IN FLOW", "31/01/2026"),
    ("LEADERSHIP IN FLUX", "16/04/2026"),
    ("HIỆU QUẢ BẤT NGỜ CÙNG N8N", "19/11/2025"),
    ("ĐI GIỮA RANH GIỚI - GIỮ VẸN NGHĨA TÌNH", "01/10/2025"),
    ("GIỮ ĐƯỢC TÂM - MỚI VƯƠN ĐƯỢC TẦM", "22/08/2025"),
    ("VIBE CODING CÙNG GEMINI", "11/07/2025"),
    ("GẶP SẾP HUY: HỎI ĐI - ĐỪNG CÓ SUY", "26/06/2025"),
    ("LEVEL UP! - BỨT PHÁ HIỆU SUẤT CÁ NHÂN & ĐỘI NGŨ", "23/05/2025"),
    ("THÔNG MINH CẢM XÚC TRONG GIAO TIẾP", "25/04/2025"),
    ("TOÀN DÂN AI: KHÔNG XÀI AI - AI XÀI MÌNH", "28/03/2025"),
    ("CHO VÀ NHẬN PHẢN HỒI HIỆU QUẢ", "27/02/2025"),
    ("AI EMPOWERMENT: DẪN LỐI TƯƠNG LAI", "17/01/2025"),
]

cards_html = ""
for w in workshops:
    cards_html += f'''
        <article class="workshop-list-card">
          <div class="workshop-list-img">
            <span class="workshop-list-img-placeholder">★</span>
          </div>
          <div class="workshop-list-content">
            <div class="workshop-date">▣ {w[1]}</div>
            <h3 class="workshop-title">{w[0]}</h3>
            <div class="workshop-speaker">Speakers from GHN Leadership</div>
            <div class="workshop-actions">
              <a href="#" class="btn-outline-small">Xem lại →</a>
            </div>
          </div>
        </article>
'''

section_css = """
    /* ── Workshop List Section ── */
    .workshop-list-section {
      background: #f9f9fc;
      padding: 72px var(--page) 96px;
    }
    .workshop-list-section .section-title {
      margin-bottom: 56px;
    }
    .workshop-list-section .section-title h2 {
      color: var(--ink);
      font-size: clamp(36px, 3.2vw, 48px);
      font-weight: 700;
      line-height: 58px;
    }
    .workshop-list-section .title-rule {
      width: 227px;
      height: 6px;
      margin-top: 10px;
      background: var(--blue);
      border-radius: 9999px;
    }
    .workshop-list-container {
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .workshop-list-card {
      display: flex;
      background: #fff;
      border: 1px solid #e0ddd7;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .workshop-list-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 32px rgba(0,0,0,0.1);
    }
    .workshop-list-img {
      width: 280px;
      background: linear-gradient(135deg, #f0ede8, #e5e2dd);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .workshop-list-img-placeholder {
      font-size: 48px;
      color: rgba(255,255,255,0.4);
    }
    .workshop-list-content {
      padding: 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
    }
    .workshop-date {
      color: var(--orange);
      font-weight: 700;
      margin-bottom: 12px;
      font-size: 14px;
      font-family: "Be Vietnam Pro", sans-serif;
    }
    .workshop-title {
      font-size: 24px;
      font-weight: 700;
      color: var(--ink);
      margin-bottom: 12px;
      line-height: 1.4;
      text-transform: uppercase;
      letter-spacing: -0.325px;
    }
    .workshop-speaker {
      font-size: 15px;
      color: #666;
      margin-bottom: 24px;
      font-family: "Be Vietnam Pro", sans-serif;
    }
    .workshop-actions {
      margin-top: auto;
    }
    .btn-outline-small {
      display: inline-flex;
      align-items: center;
      padding: 10px 24px;
      border: 2px solid var(--orange);
      color: var(--orange);
      border-radius: 9999px;
      font-size: 15px;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
      transition: all 0.2s;
    }
    .btn-outline-small:hover {
      background: var(--orange);
      color: #fff;
    }
    @media (max-width: 768px) {
      .workshop-list-card {
        flex-direction: column;
      }
      .workshop-list-img {
        width: 100%;
        height: 180px;
      }
    }
"""

bottom_part = f"""
    <!-- ── Workshop List Section ── -->
    <section class="workshop-list-section" id="workshops">
      <div class="section-title">
        <h2>Các Workshop đã diễn ra</h2>
        <div class="title-rule"></div>
      </div>
      <div class="workshop-list-container">
        {cards_html}
      </div>
    </section>
  </main>

  <style>
    /* Page Transitions */
    body {{ overflow-x: hidden; }}
    .slide-out-left {{ animation: slideOutLeft 0.3s forwards ease-in-out; }}
    .slide-out-right {{ animation: slideOutRight 0.3s forwards ease-in-out; }}
    .slide-in-left {{ animation: slideInLeft 0.3s forwards ease-in-out; }}
    .slide-in-right {{ animation: slideInRight 0.3s forwards ease-in-out; }}
    .fade-in {{ animation: fadeIn 0.3s forwards ease-in-out; }}
    
    @keyframes fadeIn {{ from {{ opacity: 0; }} to {{ opacity: 1; }} }}
    @keyframes slideOutLeft {{ from {{ transform: translateX(0); opacity: 1; }} to {{ transform: translateX(-30px); opacity: 0; }} }}
    @keyframes slideOutRight {{ from {{ transform: translateX(0); opacity: 1; }} to {{ transform: translateX(30px); opacity: 0; }} }}
    @keyframes slideInLeft {{ from {{ transform: translateX(-30px); opacity: 0; }} to {{ transform: translateX(0); opacity: 1; }} }}
    @keyframes slideInRight {{ from {{ transform: translateX(30px); opacity: 0; }} to {{ transform: translateX(0); opacity: 1; }} }}
  </style>
  <script>
    document.addEventListener('DOMContentLoaded', () => {{
      const transitionType = sessionStorage.getItem('pageTransition');
      if (transitionType === 'forward') {{
        document.body.classList.add('slide-in-right');
      }} else if (transitionType === 'backward') {{
        document.body.classList.add('slide-in-left');
      }} else {{
        document.body.classList.add('fade-in');
      }}
      sessionStorage.removeItem('pageTransition');

      const pages = ['index.html', 'leaders-talk.html', 'workshop.html', 'dien-gia.html'];
      
      document.querySelectorAll('a').forEach(link => {{
        link.addEventListener('click', (e) => {{
          const href = link.getAttribute('href');
          if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
          
          e.preventDefault();
          
          let currentPath = window.location.pathname.split('/').pop();
          if (!currentPath) currentPath = 'index.html';
          
          const targetPath = href.split('/').pop();
          
          const currentIndex = pages.indexOf(currentPath);
          const targetIndex = pages.indexOf(targetPath);
          
          let direction = 'forward';
          if (currentIndex !== -1 && targetIndex !== -1) {{
            direction = targetIndex > currentIndex ? 'forward' : 'backward';
          }}
          
          sessionStorage.setItem('pageTransition', direction);
          
          if (direction === 'forward') {{
            document.body.classList.add('slide-out-left');
          }} else {{
            document.body.classList.add('slide-out-right');
          }}
          
          setTimeout(() => {{
            window.location.href = href;
          }}, 250);
        }});
      }});
    }});
  </script>
</body>
</html>
"""

# Inject new css into head
top_part = top_part.replace('</style>', section_css + '\n  </style>')
# Also fix the title
top_part = top_part.replace('<title>Diễn giả - Leaders Talk - GHN Learning</title>', '<title>Workshop - Leaders Talk - GHN Learning</title>')

final_html = top_part + strip_nav + bottom_part

with open("/Users/nguyenthihuynhnhu/Desktop/LandingPage-Trang chủ/workshop.html", "w") as f:
    f.write(final_html)

print("Generated workshop.html")
