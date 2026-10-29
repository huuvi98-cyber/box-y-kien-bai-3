export interface Paragraph {
  id: number;
  text: string;
  isHighlight?: boolean;
  highlightTag?: string;
}

export interface KeyPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface OpinionBox {
  id: string;
  boxNumber: number;
  speaker: string;
  role: string;
  organization: string;
  headline: string;
  subtitle: string;
  image: string;
  imageCaption: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  coreQuote: string;
  previewText: string;
  paragraphs: Paragraph[];
  keyPillars: KeyPillar[];
  keyQuotes: string[];
  tags: string[];
  matrixHighlights: {
    thongDiep: string;
    dongLuc: string;
    hanhDong: string;
    thuocDo: string;
  };
}

export const OPINION_BOXES: OpinionBox[] = [
  {
    id: "box-1",
    boxNumber: 1,
    speaker: "ĐBQH BÙI HOÀI SƠN",
    role: "Phó Trưởng Ban Tuyên giáo Trung ương",
    organization: "Quốc hội / Ban Tuyên giáo Trung ương",
    headline: "Tạo dựng đồng thuận từ thực tiễn vì dân",
    subtitle: "Thông điệp 9 chữ với 3 chữ 'LÀM' và tấm khiên pháp lý từ Nghị quyết 24-NQ/TW",
    image: "/assets/aistudio/box_1_DBQH_Bui_Hoa_Son_21975a4a.jpg",
    imageCaption: "ĐBQH Bùi Hoài Sơn phát biểu tại nghị trường",
    badge: "Thực tiễn & Thể chế",
    badgeColor: "bg-amber-800 text-amber-50 border-amber-900",
    accentColor: "amber",
    coreQuote: "Thông điệp vỏn vẹn 9 chữ nhưng có tới 3 chữ 'làm'... chữ 'làm' thứ nhất là xắn tay vào việc... chữ 'làm' thứ hai gắn với 'đúng'... chữ 'làm' thứ ba đi kèm sự 'quyết liệt' tạo ra 'hiệu quả'.",
    previewText: "Thông điệp “Làm và làm đúng, làm quyết liệt, hiệu quả”, hướng đến mục tiêu cao nhất “tất cả vì lợi ích của nhân dân” của Tổng Bí thư, Chủ tịch nước Tô Lâm không chỉ thể hiện một yêu cầu về phương pháp lãnh đạo, quản lý, mà sâu xa hơn là đặt ra thước đo mới đối với chất lượng hoạt động của cả hệ thống chính trị trong nhiệm kỳ mới: Chủ trương phải đi vào cuộc sống, quyết sách phải tạo ra thay đổi và mỗi thay đổi cuối cùng phải được người dân cảm nhận bằng những lợi ích cụ thể.",
    keyQuotes: [
      "Một thông điệp vỏn vẹn 9 chữ nhưng có tới 3 chữ 'làm'. Sự lặp lại ắt hẳn không thuần túy là điểm nhấn ngôn ngữ, mà là một mệnh lệnh chính trị, một thông điệp mang tính thời đại.",
      "Nghị quyết số 24-NQ/TW của Bộ Chính trị mang ý nghĩa như một 'tấm khiên' pháp lý và chính trị kiên cố, bảo vệ cán bộ dám nghĩ, dám làm vì lợi ích chung.",
      "Khi bộ máy thực sự hành động vì dân, lấy sự hài lòng, hạnh phúc và chất lượng sống của người dân làm thước đo, đồng thuận xã hội sẽ được tạo dựng bằng thực tiễn sinh động."
    ],
    paragraphs: [
      {
        id: 1,
        text: "Thông điệp “Làm và làm đúng, làm quyết liệt, hiệu quả”, hướng đến mục tiêu cao nhất “tất cả vì lợi ích của nhân dân” của Tổng Bí thư, Chủ tịch nước Tô Lâm không chỉ thể hiện một yêu cầu về phương pháp lãnh đạo, quản lý, mà sâu xa hơn là đặt ra thước đo mới đối với chất lượng hoạt động của cả hệ thống chính trị trong nhiệm kỳ mới: Chủ trương phải đi vào cuộc sống, quyết sách phải tạo ra thay đổi và mỗi thay đổi cuối cùng phải được người dân cảm nhận bằng những lợi ích cụ thể.",
        isHighlight: true,
        highlightTag: "Mục tiêu cao nhất"
      },
      {
        id: 2,
        text: "Một thông điệp vỏn vẹn 9 chữ nhưng có tới 3 chữ “làm”. Sự lặp lại ắt hẳn không thuần túy là điểm nhấn ngôn ngữ, mà là một mệnh lệnh chính trị, một thông điệp mang tính thời đại. Có thể hiểu rằng, chữ “làm” thứ nhất là yêu cầu xắn tay vào việc, chấm dứt tình trạng nói suông, bàn lùi hay chỉ đạo trên giấy. Chữ “làm” thứ hai gắn với chữ “đúng” - hành động không được tùy tiện mà phải thượng tôn pháp luật, bám sát đường lối, chủ trương của Đảng, pháp luật nhà nước. Chữ “làm” thứ ba đi kèm sự “quyết liệt” - đòi hỏi thái độ dấn thân, phá vỡ sức ì để tạo ra “hiệu quả” đo đếm được. Điều này khẳng định lại nguyên lý cốt lõi: Quyền lực nhà nước thuộc về nhân dân và phải phục vụ nhân dân.",
        isHighlight: true,
        highlightTag: "Ý nghĩa 3 chữ LÀM"
      },
      {
        id: 3,
        text: "Tinh thần “làm quyết liệt” vì thế cần được thể hiện từ những vấn đề rất cụ thể: giải quyết thủ tục nhanh hơn, giao thông thuận tiện hơn, môi trường sống tốt hơn, nhà ở và dịch vụ công dễ tiếp cận hơn, những khu vực còn khó khăn được quan tâm nhiều hơn, người dân được lắng nghe và có cơ hội tham gia vào quá trình kiến tạo sự phát triển. Chính từ những điều tưởng như nhỏ bé ấy, niềm tin xã hội đối với Đảng và Nhà nước được bồi đắp."
      },
      {
        id: 4,
        text: "Và để tinh thần “làm quyết liệt” được lan tỏa mạnh mẽ để biến khát vọng phát triển thành hành động trong thực tế, đội ngũ cán bộ, đảng viên cần một cơ chế bảo vệ vững chắc để giải phóng sức sáng tạo. Đó là lý do Nghị quyết số 24-NQ/TW ngày 22-8-2026 của Bộ Chính trị về phát huy tính tiên phong, gương mẫu, tinh thần đổi mới, dám nghĩ, dám làm, dám chịu trách nhiệm của đội ngũ cán bộ, đảng viên trong kỷ nguyên mới ra đời, mang ý nghĩa như một “tấm khiên” pháp lý và chính trị kiên cố. Việc bảo vệ, không truy cứu trách nhiệm đối với những cán bộ đổi mới sáng tạo, hành động vì lợi ích chung, không vụ lợi chính là chìa khóa tháo gỡ điểm nghẽn về tư duy. Cơ chế này xóa bỏ tâm lý sợ hãi, khích lệ đội ngũ công bộc của dân dám xả thân, biến tinh thần “dám nghĩ, dám làm” thành hành động “làm quyết liệt, hiệu quả” trên mọi mặt trận.",
        isHighlight: true,
        highlightTag: "Tấm khiên pháp lý Nghị quyết 24"
      },
      {
        id: 5,
        text: "Khi bộ máy thực sự hành động vì dân, lấy sự hài lòng, hạnh phúc và chất lượng sống của người dân làm thước đo, đồng thuận xã hội sẽ không chỉ được kêu gọi mà được tạo dựng bằng thực tiễn sinh động. Đó cũng chính là cội nguồn sức mạnh nội sinh, là nền tảng để toàn Đảng, toàn dân và toàn quân ta chung sức, đồng lòng, tự tin đưa đất nước bước tới mục tiêu phát triển hùng cường, thịnh vượng trong kỷ nguyên mới."
      }
    ],
    keyPillars: [
      {
        title: "Chữ LÀM 1: Xắn tay vào việc",
        description: "Chấm dứt tình trạng nói suông, bàn lùi hay chỉ đạo trên giấy.",
        iconName: "Zap"
      },
      {
        title: "Chữ LÀM 2: Thượng tôn pháp luật",
        description: "Làm đúng quy định, bám sát đường lối của Đảng và pháp luật Nhà nước.",
        iconName: "Scale"
      },
      {
        title: "Chữ LÀM 3: Quyết liệt & Hiệu quả",
        description: "Phá vỡ sức ì, dấn thân để mang lại kết quả cụ thể đo đếm được.",
        iconName: "CheckCircle"
      },
      {
        title: "Nghị quyết 24-NQ/TW",
        description: "Tấm khiên pháp lý bảo vệ cán bộ đổi mới sáng tạo vì lợi ích chung.",
        iconName: "Shield"
      }
    ],
    tags: ["Nghị quyết 24-NQ/TW", "3 chữ LÀM", "Tấm khiên pháp lý", "Mệnh lệnh chính trị", "Vì lợi ích nhân dân"],
    matrixHighlights: {
      thongDiep: "Mệnh lệnh chính trị 9 chữ, sự lặp lại 3 chữ LÀM nhấn mạnh hành động thực tiễn",
      dongLuc: "Nghị quyết 24-NQ/TW bảo vệ cán bộ dám nghĩ dám làm, xóa tâm lý sợ hãi",
      hanhDong: "Giải quyết thủ tục nhanh, giao thông tốt, dịch vụ công dễ tiếp cận",
      thuocDo: "Sự hài lòng, hạnh phúc và chất lượng sống của nhân dân"
    }
  },
  {
    id: "box-2",
    boxNumber: 2,
    speaker: "Đồng chí NGUYỄN MẠNH CƯỜNG",
    role: "Ủy viên dự khuyết Trung ương Đảng, Ủy viên BTV Thành ủy TPHCM, Phó Chủ tịch UBND TPHCM",
    organization: "UBND TP Hồ Chí Minh",
    headline: "Kiến tạo không gian phát triển bền vững",
    subtitle: "Chuyển đổi từ quản lý hành chính sang quản trị phát triển dựa trên pháp luật, dữ liệu và KPI định lượng",
    image: "/assets/aistudio/Box_2_Dong_chi_Nguyen_Manh_Cuong_6060bad5.jpg",
    imageCaption: "Đồng chí Nguyễn Mạnh Cường phát biểu chỉ đạo",
    badge: "Đô thị & Quản trị",
    badgeColor: "bg-blue-900 text-blue-50 border-blue-950",
    accentColor: "blue",
    coreQuote: "Thành phố không chờ Luật Phát triển đô thị có hiệu lực mới bắt tay vào rà soát, mà đã huy động toàn bộ máy chạy song song, chuẩn bị sẵn những khung cơ chế... xóa đi 'độ trễ' của chính sách.",
    previewText: "Tinh thần “làm và làm đúng, làm quyết liệt, hiệu quả” đã trở thành mệnh lệnh hành động, phong cách chỉ đạo, điều hành của UBND thành phố. Đó cũng là sự chuyển đổi từ trạng thái thụ động sang tâm thế đi trước đón đầu, chuẩn bị sẵn sàng các bệ phóng thực thi. Trong bối cảnh thành phố đang tăng tốc thực hiện các giải pháp tạo sự chuyển biến mạnh mẽ trong đổi mới mô hình phát triển, việc chủ động thể chế hóa luật mang ý nghĩa sống còn. Đây là bước đi mang tính nền tảng để TPHCM hiện thực hóa các chỉ tiêu khát vọng mà Nghị quyết Đại hội đại biểu Đảng bộ TPHCM lần thứ I (nhiệm kỳ 2025-2030) đã đề ra.",
    keyQuotes: [
      "Thành phố không chờ Luật Phát triển đô thị có hiệu lực mới bắt tay vào rà soát, mà đã huy động toàn bộ máy chạy song song... xóa đi 'độ trễ' của chính sách.",
      "Việc thành phố quyết tâm áp dụng hệ thống KPI để đo lường cán bộ là chìa khóa xóa bỏ tâm lý đùn đẩy, sợ trách nhiệm.",
      "Chuyển từ quản lý hành chính sang quản trị phát triển dựa trên pháp luật và dữ liệu; đẩy mạnh phân cấp, phân quyền gắn với trách nhiệm giải trình."
    ],
    paragraphs: [
      {
        id: 1,
        text: "Tinh thần “làm và làm đúng, làm quyết liệt, hiệu quả” đã trở thành mệnh lệnh hành động, phong cách chỉ đạo, điều hành của UBND thành phố. Đó cũng là sự chuyển đổi từ trạng thái thụ động sang tâm thế đi trước đón đầu, chuẩn bị sẵn sàng các bệ phóng thực thi. Trong bối cảnh thành phố đang tăng tốc thực hiện các giải pháp tạo sự chuyển biến mạnh mẽ trong đổi mới mô hình phát triển, việc chủ động thể chế hóa luật mang ý nghĩa sống còn. Đây là bước đi mang tính nền tảng để TPHCM hiện thực hóa các chỉ tiêu khát vọng mà Nghị quyết Đại hội đại biểu Đảng bộ TPHCM lần thứ I (nhiệm kỳ 2025-2030) đã đề ra.",
        isHighlight: true,
        highlightTag: "Mệnh lệnh hành động TPHCM"
      },
      {
        id: 2,
        text: "Thành phố cũng xác định rõ, khi mô hình phát triển mới được kích hoạt, việc sớm tháo gỡ các rào cản không chỉ giúp thành phố giữ vững vai trò đầu tàu kinh tế, mà còn đóng góp tích cực, mạnh mẽ vào sự phát triển chung của cả nước. Do đó, thành phố không chờ Luật Phát triển đô thị có hiệu lực mới bắt tay vào rà soát, mà đã huy động toàn bộ máy chạy song song, chuẩn bị sẵn những khung cơ chế. Điều này giúp xóa đi “độ trễ” của chính sách, đảm bảo khi luật có hiệu lực, các quyết sách tháo gỡ điểm nghẽn về hạ tầng, quy hoạch và chỉnh trang đô thị lập tức được triển khai vào đời sống.",
        isHighlight: true,
        highlightTag: "Xóa độ trễ chính sách"
      },
      {
        id: 3,
        text: "Để Luật Phát triển đô thị đi vào cuộc sống, yêu cầu đặt ra cho đội ngũ cán bộ công chức là phải tập trung nỗ lực, nâng cao trách nhiệm, phát huy cao nhất vai trò chủ thể, lấy kết quả phục vụ người dân, doanh nghiệp làm trung tâm, kết nối sự đồng hành của người dân, doanh nghiệp trong quá trình tổ chức thực hiện nhiệm vụ. Điều này đòi hỏi mỗi cán bộ, công chức phải chủ động tìm tòi, đổi mới tư duy, có quyết tâm đột phá, sáng tạo trong tổ chức thực hiện, dám chịu trách nhiệm với việc mình làm, lĩnh vực mình phụ trách để mỗi nghị quyết, quyết định đạt kết quả tốt nhất trong thực tế."
      },
      {
        id: 4,
        text: "Việc thành phố quyết tâm và mạnh dạn áp dụng hệ thống KPI để đo lường cán bộ chính là chìa khóa xóa bỏ tâm lý đùn đẩy, sợ trách nhiệm, thay vào đó là cơ chế định lượng hóa công việc bằng sản phẩm đầu ra cụ thể. Từ đó, nhiều đầu việc khó, như hàng trăm dự án tồn đọng, vướng mắc đang được quyết liệt tháo gỡ; các cam kết chăm lo về nhà ở, y tế, an sinh xã hội được hiện thực hóa thần tốc ở cấp cơ sở, mang lại những kết quả đáng khích lệ.",
        isHighlight: true,
        highlightTag: "KPI định lượng công việc"
      },
      {
        id: 5,
        text: "Đây cũng là bước ngoặt để TPHCM chuyển đổi sang mô hình quản trị địa phương dân chủ, hiện đại, thông minh, minh bạch, hiệu lực, hiệu quả: Chuyển từ quản lý hành chính sang quản trị phát triển dựa trên pháp luật và dữ liệu; đẩy mạnh phân cấp, phân quyền gắn với trách nhiệm giải trình, kiểm soát quyền lực và kiên định lấy sự hài lòng của người dân làm thước đo hiệu quả quản trị. Có thể nói việc chuyển từ quản lý hành chính sang quản trị phát triển là một bước chuyển lớn trong nhận thức và tư duy lãnh đạo, quản lý. Mục tiêu của quản trị phát triển là hướng tới kiến tạo khung chính sách, kiến tạo không gian phát triển bền vững."
      }
    ],
    keyPillars: [
      {
        title: "Bộ máy chạy song song",
        description: "Xóa độ trễ chính sách bằng việc chuẩn bị khung cơ chế trước khi Luật có hiệu lực.",
        iconName: "TrendingUp"
      },
      {
        title: "Đo lường cán bộ bằng KPI",
        description: "Định lượng hóa sản phẩm đầu ra, xóa bỏ tâm lý đùn đẩy, tháo gỡ dự án tồn đọng.",
        iconName: "BarChart3"
      },
      {
        title: "Chuyển đổi sang Quản trị phát triển",
        description: "Dựa trên pháp luật & dữ liệu, phân cấp phân quyền gắn liền trách nhiệm giải trình.",
        iconName: "Layers"
      },
      {
        title: "An sinh & Đô thị thần tốc",
        description: "Hiện thực hóa cam kết nhà ở, y tế và tháo gỡ điểm nghẽn quy hoạch hạ tầng.",
        iconName: "Building2"
      }
    ],
    tags: ["TPHCM", "Quản trị phát triển", "Hệ thống KPI", "Luật Phát triển đô thị", "Xóa độ trễ chính sách"],
    matrixHighlights: {
      thongDiep: "Mệnh lệnh hành động, chuyển từ trạng thái thụ động sang đi trước đón đầu",
      dongLuc: "Hệ thống KPI đo lường định lượng sản phẩm đầu ra cán bộ",
      hanhDong: "Chạy song song chuẩn bị luật, giải quyết hàng trăm dự án tồn đọng",
      thuocDo: "Sự hài lòng của người dân và không gian phát triển bền vững"
    }
  },
  {
    id: "box-3",
    boxNumber: 3,
    speaker: "ĐBQH NGUYỄN THỊ VIỆT NGA",
    role: "Ủy viên Ủy ban Văn hóa và Xã hội của Quốc hội",
    organization: "Quốc hội / Ủy ban Văn hóa và Xã hội",
    headline: "Luôn tự hỏi những việc mình làm đã giúp được gì cho người dân",
    subtitle: "Kim chỉ nam hành động nhiệm kỳ 2026-2031 và những chuyển động cụ thể tới từng gia đình",
    image: "/assets/aistudio/Box_3_DBQH_NGuyen_Thi_Viet_Nga_4316022b.jpg",
    imageCaption: "ĐBQH Nguyễn Thị Việt Nga phát biểu ý kiến",
    badge: "Văn hóa & An sinh",
    badgeColor: "bg-rose-900 text-rose-50 border-rose-950",
    accentColor: "rose",
    coreQuote: "Mỗi cơ quan, mỗi cán bộ cần tự hỏi: việc mình làm đã giúp người dân được gì, còn điều gì khiến người dân phải chờ đợi?",
    previewText: "Thông điệp “Làm và làm đúng, làm quyết liệt, hiệu quả” của Tổng Bí thư, Chủ tịch nước Tô Lâm có thể xem là kim chỉ nam hành động của nhiệm kỳ 2026-2031. Đặt trong mục tiêu “tất cả vì lợi ích của nhân dân”, thông điệp ấy xác lập một yêu cầu xuyên suốt: mỗi chủ trương phải được cụ thể hóa bằng hành động, mỗi hành động phải tạo ra giá trị thiết thực cho người dân. Đây cũng là đòi hỏi về trách nhiệm của bộ máy trước những kỳ vọng phát triển của đất nước.",
    keyQuotes: [
      "Mỗi cơ quan, mỗi cán bộ cần tự hỏi: việc mình làm đã giúp người dân được gì, còn điều gì khiến người dân phải chờ đợi?",
      "Một hồ sơ bớt phải đi lại, một vướng mắc được xử lý đúng hạn cũng là biểu hiện cụ thể của tinh thần phục vụ.",
      "Thông điệp 'Làm và làm đúng, làm quyết liệt, hiệu quả' có thể xem là kim chỉ nam hành động của nhiệm kỳ 2026-2031."
    ],
    paragraphs: [
      {
        id: 1,
        text: "Thông điệp “Làm và làm đúng, làm quyết liệt, hiệu quả” của Tổng Bí thư, Chủ tịch nước Tô Lâm có thể xem là kim chỉ nam hành động của nhiệm kỳ 2026-2031. Đặt trong mục tiêu “tất cả vì lợi ích của nhân dân”, thông điệp ấy xác lập một yêu cầu xuyên suốt: mỗi chủ trương phải được cụ thể hóa bằng hành động, mỗi hành động phải tạo ra giá trị thiết thực cho người dân. Đây cũng là đòi hỏi về trách nhiệm của bộ máy trước những kỳ vọng phát triển của đất nước.",
        isHighlight: true,
        highlightTag: "Kim chỉ nam 2026-2031"
      },
      {
        id: 2,
        text: "Trong đó, “làm” là chủ động nhận việc, giải quyết việc, khắc phục sự trì trệ, né tránh, đùn đẩy trách nhiệm. “Làm đúng” là tuân thủ pháp luật, sát thực tiễn, tôn trọng và bảo vệ quyền, lợi ích chính đáng của nhân dân. “Làm quyết liệt” đòi hỏi theo đuổi công việc đến cùng, tháo gỡ điểm nghẽn, xác định rõ trách nhiệm và thời hạn. “Hiệu quả” phải được kiểm chứng bằng kết quả thực tế, bằng những khó khăn được giải quyết và những cơ hội được mở ra."
      },
      {
        id: 3,
        text: "Thời gian qua, tinh thần ấy được cụ thể hóa qua việc gắn hoàn thiện thể chế với tổ chức thực thi. Những trường phổ thông nội trú được đưa vào sử dụng ở các xã biên giới mở thêm cơ hội học tập cho trẻ em vùng khó khăn. Chính sách miễn học phí trong các cơ sở giáo dục công lập giúp giảm gánh nặng cho gia đình; lộ trình miễn phí sách giáo khoa tiếp tục thể hiện sự đầu tư cho tương lai. Những bước triển khai khám sức khỏe định kỳ, khám sàng lọc miễn phí hướng tới chăm lo người dân từ sớm… Đó là những chuyển động để chủ trương đến với từng gia đình.",
        isHighlight: true,
        highlightTag: "Chuyển động thực tế vì dân"
      },
      {
        id: 4,
        text: "Bởi vậy, thước đo công việc phải hiện diện trong đời sống thường nhật: trẻ em được học tập tốt hơn, người bệnh được chăm sóc kịp thời hơn, người dân giải quyết thủ tục thuận lợi hơn. Một hồ sơ bớt phải đi lại, một vướng mắc được xử lý đúng hạn cũng là biểu hiện cụ thể của tinh thần phục vụ."
      },
      {
        id: 5,
        text: "Mỗi cơ quan, mỗi cán bộ cần tự hỏi: việc mình làm đã giúp người dân được gì, còn điều gì khiến người dân phải chờ đợi?",
        isHighlight: true,
        highlightTag: "Câu hỏi tự soi của cán bộ"
      },
      {
        id: 6,
        text: "Khi quyền lợi của nhân dân được đặt ở vị trí trung tâm và được bảo đảm bằng hành động nhất quán, niềm tin sẽ được bồi đắp, sự đồng thuận sẽ có nền tảng vững chắc. Niềm tin ấy khơi dậy tinh thần tham gia, ý thức trách nhiệm và sức sáng tạo của mỗi người. Từ những thay đổi trong cuộc sống, khối đại đoàn kết toàn dân tộc được củng cố, tạo sức mạnh để đất nước tiến tới mục tiêu hùng cường, thịnh vượng trong kỷ nguyên mới."
      }
    ],
    keyPillars: [
      {
        title: "Giáo dục vùng khó & Miễn học phí",
        description: "Trường nội trú xã biên giới, miễn học phí công lập và lộ trình miễn phí sách giáo khoa.",
        iconName: "GraduationCap"
      },
      {
        title: "Khám sức khỏe miễn phí",
        description: "Chăm lo người dân từ sớm qua khám định kỳ và sàng lọc tầm soát dịch bệnh.",
        iconName: "HeartPulse"
      },
      {
        title: "Hành chính bớt đi lại",
        description: "Một hồ sơ giải quyết đúng hạn là biểu hiện sinh động của tinh thần phục vụ.",
        iconName: "FileCheck"
      },
      {
        title: "Câu hỏi 'Tự soi'",
        description: "Việc mình làm đã giúp được gì cho dân, còn điều gì khiến dân phải chờ đợi?",
        iconName: "HelpCircle"
      }
    ],
    tags: ["Kim chỉ nam hành động", "Trường nội trú biên giới", "Miễn học phí", "Chăm sóc sức khỏe", "Khối đại đoàn kết"],
    matrixHighlights: {
      thongDiep: "Kim chỉ nam hành động 2026-2031, cụ thể hóa chủ trương bằng kết quả thực tế",
      dongLuc: "Tinh thần tự soi, tự hỏi của từng cơ quan cán bộ đối với người dân",
      hanhDong: "Miễn học phí, trường nội trú biên giới, khám sức khỏe miễn phí, thủ tục nhanh",
      thuocDo: "Trẻ em học tốt hơn, người bệnh chăm sóc tốt hơn, niềm tin nhân dân củng cố"
    }
  }
];

export const CORE_ARTICLE_META = {
  title: "ĐỒ HỌA TƯƠNG TÁC / E-MAGAZINE",
  topic: "THÔNG ĐIỆP 'LÀM VÀ LÀM ĐÚNG, LÀM QUYẾT LIỆT, HIỆU QUẢ' TẤT CẢ VÌ LỢI ÍCH CỦA NHÂN DÂN",
  date: "2026-10-28",
  publisher: "CHUYÊN TRANG ĐỒ HỌA BÁO CHÍ CHÍNH TRỊ - XÃ HỘI",
  quoteLeader: "Tổng Bí thư, Chủ tịch nước Tô Lâm",
  coreQuoteText: "Làm và làm đúng, làm quyết liệt, hiệu quả - Tất cả vì lợi ích của nhân dân"
};
