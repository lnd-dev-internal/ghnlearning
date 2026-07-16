export type CourseCard = {
  title: string;
  image: string;
  duration: string;
  href: string;
};

export type NvxlSection = {
  slug: string;
  shortLabel: string;
  title: string;
  cards?: CourseCard[];
  botchat?: boolean;
};

export const nvxlSections: NvxlSection[] = [
  { slug: "nvxl", shortLabel: "Hàng giao", title: "Quy trình xử lý hàng giao" },
  {
    slug: "nvxl-lay", shortLabel: "Hàng lấy", title: "Quy trình xử lý hàng lấy",
    cards: [
      { title: "Gán đơn lấy", image: "/b2b/nvxl-ganlay.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e90fa79a2f94c7ed11785d" },
      { title: "Bắn kiểm", image: "/b2b/nvxl-bankiemlay.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e90593b8b314db43127e0e" },
      { title: "Nhận hàng tại Bưu cục", image: "/b2b/nvxl-nhanhangbc.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9e690ae66b795814a568c" },
      { title: "Tổng hợp quy trình xử lý hàng lấy", image: "/b2b/nvxl-lay.png", duration: "2 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e90f1bc1dc6bbe38aa1814" },
    ],
  },
  {
    slug: "nvxl-tra", shortLabel: "Hàng trả", title: "Quy trình xử lý hàng trả",
    cards: [
      { title: "Phân loại đơn hàng", image: "/b2b/nvxl-phanloai.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9ea25ae66b795814a5696" },
      { title: "In mã đơn", image: "/b2b/nvxl-inma.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9eaa1c1dc6bbe38aa1be8" },
      { title: "Tổng hợp quy trình xử lý hàng trả", image: "/b2b/nvxl-tra.png", duration: "20 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9ecfeae66b795814a569f" },
    ],
  },
  {
    slug: "nvxl-luanchuyen", shortLabel: "Luân chuyển", title: "Quy trình xử lý luân chuyển",
    cards: [
      { title: "Đóng kiện", image: "/b2b/nvxl-dongkien.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9e34b7efad2772ebb96af" },
      { title: "Xuất kiện", image: "/b2b/nvxl-xuatkien.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9e54fc1dc6bbe38aa1bd8" },
      { title: "Tổng hợp quy trình xử lý luân chuyển", image: "/b2b/nvxl-lc.png", duration: "20 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9ec3dae66b795814a569d" },
    ],
  },
  {
    slug: "nvxl-khac", shortLabel: "Quy trình khác", title: "Quy trình khác",
    cards: [
      { title: "Xử lý Ticket", image: "/b2b/nvxl-ticket.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9ee2d7efad2772ebb96c2" },
      { title: "Tạo phiếu Quản lý Rủi ro", image: "/b2b/nvxl-qlrr.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9ef04ae66b795814a56a7" },
    ],
  },
  {
    slug: "nvxl-kinhdoanh", shortLabel: "Kinh doanh", title: "Kỹ năng Kinh doanh",
    cards: [
      { title: "Chăm sóc Khách hàng", image: "/b2b/kd-cskh.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=692ebc93c025d3f2a964a1ed" },
      { title: "Chăm sóc Khách hàng lớn", image: "/b2b/kd-cskhlon.png", duration: "10 phút", href: "https://app-driver-web.ghn.vn/survey-detail?surveyId=692eb91c4a325027d16826d1" },
    ],
  },
  { slug: "nvxl-botchat", shortLabel: "Botchat", title: "Botchat Vận hành", botchat: true },
];

export function getNvxlSection(slug: string) {
  const section = nvxlSections.find((item) => item.slug === slug);
  if (!section) throw new Error(`Unknown NVXL section: ${slug}`);
  return section;
}
