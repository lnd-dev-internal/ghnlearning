# HƯỚNG DẪN DEPLOY

> Tài liệu onboarding & quy trình triển khai mã nguồn

---

## Bước 1: Xin Cấp VPN

Để truy cập vào hệ thống nội bộ (bao gồm GitLab), bạn cần được cấp tài khoản VPN trước.

### Cách thực hiện

- Truy cập eForm nội bộ để tạo yêu cầu: <https://noibo.ghn.vn/eform/form/create?flowId=6676c752140753310e197f73>
- **Nhóm quy trình:** Quy Trình Công Nghệ → **Quy trình:** IT - Yêu cầu cấp tài khoản VPN
- Điền đầy đủ thông tin: họ tên, bộ phận, email công ty.
- Nếu cần hỗ trợ, liên hệ: **tailp@ghn.vn**

### Sau khi có VPN

- Cài đặt VPN client theo hướng dẫn được gửi kèm trong email phản hồi.
- Kết nối VPN thành công trước khi thực hiện các bước tiếp theo.
- Truy cập GitLab nội bộ để kiểm tra kết nối.

---

## Bước 2: Xin Cấp Tài Khoản GitLab

Sau khi kết nối VPN thành công, liên hệ để được cấp tài khoản GitLab và tạo repository.

### Cách thực hiện

- Truy cập eForm nội bộ để tạo yêu cầu: <https://noibo.ghn.vn/eform/form/create?flowId=6676c752140753310e197f73>
- **Nhóm quy trình:** Quy Trình Công Nghệ → **Quy trình:** IT - Yêu cầu cấp quyền truy cập dữ liệu VPN/File Server (để truy cập gitlab.ghn.vn)
- Điền thông tin: họ tên, email công ty, tên repo cần tạo, quyền truy cập.
- Nếu cần hỗ trợ, liên hệ: **tiendk@ghn.vn**

### Thông tin cần cung cấp trong email

- Họ và tên đầy đủ
- Email công ty
- Tên dự án / tên repository cần tạo
- Quyền truy cập cần thiết (Developer / Maintainer)
- Bộ phận / team phụ trách

---

## Bước 3: Push Code Lên Repository

Sau khi có tài khoản GitLab và repository được tạo, thực hiện các bước sau để push code:

### Cấu hình Git lần đầu

1. Cài đặt Git nếu chưa có: <https://git-scm.com/downloads>
2. Cấu hình thông tin cá nhân:

   ```bash
   git config --global user.name "Họ Tên"
   git config --global user.email "email@ghn.vn"
   ```

### Push code lên GitLab

3. Clone hoặc khởi tạo repository:

   ```bash
   # Clone repo đã có
   git clone http://<gitlab-url>/<group>/<repo>.git

   # Hoặc khởi tạo từ folder local
   git init && git remote add origin http://<gitlab-url>/<group>/<repo>.git
   ```

4. Thêm file và commit:

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

5. Push lên GitLab:

   ```bash
   git push -u origin main
   # Nhập username và password GitLab khi được yêu cầu
   ```

### ⚠️ Lưu ý quan trọng

- Luôn đảm bảo VPN đang kết nối trước khi push code.
- Không commit các file nhạy cảm như `.env`, private key, password.
- Thêm file `.gitignore` phù hợp với ngôn ngữ/framework đang dùng.
- Liên hệ ngay với người hỗ trợ nếu gặp lỗi xác thực (401/403).
