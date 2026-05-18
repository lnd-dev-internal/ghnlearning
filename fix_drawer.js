const fs = require('fs');
const files = [
    { path: 'vanphong.html', active: 'Khối Văn phòng' },
    { path: 'index.html', active: 'Khối Thị Trường' },
    { path: 'hangnang.html', active: 'Khối Hàng Nặng' },
    { path: 'homepage.html', active: 'Trang chủ' }
];

const newDrawer = `<aside class="drawer" id="drawer">
    <div class="nav">
        <a href="homepage.html" class="nav-item{hpActive}">
            <div class="nav-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </div>
            <div class="nav-text">Trang chủ</div>
        </a>
        <a href="vanphong.html" class="nav-item{vpActive}">
            <div class="nav-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.8l7 7v7h-4v-6H9v6H5v-7l7-7z"/></svg>
            </div>
            <div class="nav-text">Khối Văn phòng</div>
        </a>
        <div class="sub-nav">
            <a href="newbie.html" class="sub-nav-item">Chương trình Hội nhập</a>
            <a href="cskh.html" class="sub-nav-item">Nhân viên Chăm sóc Khách hàng</a>
            <a href="fieldsale.html" class="sub-nav-item">Nhân viên Field Sale</a>
        </div>
        <a href="index.html" class="nav-item{ttActive}">
            <div class="nav-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
            <div class="nav-text">Khối Thị Trường</div>
        </a>
        <div class="sub-nav">
            <a href="am-kynang-chuyenmon.html" class="sub-nav-item">Quản lý Khu vực</a>
            <a href="nvxl.html" class="sub-nav-item">Nhân viên Xử lý</a>
            <a href="nvpttt.html" class="sub-nav-item">Nhân viên Phát triển Thị trường</a>
            <a href="nvph.html" class="sub-nav-item">Nhân viên Phân hàng</a>
        </div>
        <a href="hangnang.html" class="nav-item{hnActive}">
            <div class="nav-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/></svg>
            </div>
            <div class="nav-text">Khối Hàng Nặng</div>
        </a>
        <div class="sub-nav" style="padding-bottom: 20px;">
            <a href="hangnang.html" class="sub-nav-item">Nhân viên Xử lý</a>
        </div>
    </div>
</aside>`;

for (const file of files) {
    if (fs.existsSync(file.path)) {
        let content = fs.readFileSync(file.path, 'utf8');
        
        let drawerHtml = newDrawer
            .replace('{hpActive}', file.active === 'Trang chủ' ? ' active' : '')
            .replace('{vpActive}', file.active === 'Khối Văn phòng' ? ' active' : '')
            .replace('{ttActive}', file.active === 'Khối Thị Trường' ? ' active' : '')
            .replace('{hnActive}', file.active === 'Khối Hàng Nặng' ? ' active' : '');
            
        content = content.replace(/<aside class="drawer" id="drawer">[\s\S]*?<\/aside>/, drawerHtml);
        
        fs.writeFileSync(file.path, content, 'utf8');
        console.log(`Fixed ${file.path}`);
    }
}
