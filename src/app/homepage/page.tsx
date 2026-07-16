import { redirect } from "next/navigation";

// daotao.ghn.vn được trỏ cứng vào /homepage. Trang homepage cũ đã bỏ,
// chuyển hướng tạm (307) sang /onboarding. Dùng redirect tạm (KHÔNG permanent)
// để trình duyệt không cache cứng — tránh lặp lại cảnh "dính cache cũ".
export default function HomepagePage() {
  redirect("/onboarding");
}
