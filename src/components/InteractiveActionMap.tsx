import React, { useState } from 'react';
import { ArrowDown, CheckCircle, Shield, Award, Heart, Sparkles, Building2, ChevronRight } from 'lucide-react';

export const InteractiveActionMap: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      title: "1. Thông điệp Quán xuyến",
      subtitle: "Mệnh lệnh chính trị từ Tổng Bí thư, Chủ tịch nước Tô Lâm",
      badge: "Cội nguồn",
      color: "from-red-900 to-amber-900",
      content: "Thông điệp 9 chữ 'Làm và làm đúng, làm quyết liệt, hiệu quả' đặt ra thước đo mới cho cả hệ thống chính trị: Quyết sách phải tạo ra thay đổi và mỗi thay đổi phải được người dân cảm nhận bằng lợi ích cụ thể.",
      highlights: ["9 chữ với 3 chữ LÀM", "Tất cả vì lợi ích nhân dân", "Mệnh lệnh chính trị thời đại"]
    },
    {
      id: 2,
      title: "2. Giải mã 3 chữ 'LÀM'",
      subtitle: "Yêu cầu về phương pháp lãnh đạo và quản lý",
      badge: "Phương pháp",
      color: "from-amber-900 to-amber-800",
      content: "Chữ LÀM 1: Xắn tay vào việc, chấm dứt chỉ đạo trên giấy. Chữ LÀM 2: Làm đúng pháp luật, không làm tùy tiện. Chữ LÀM 3: Quyết liệt dấn thân để mang lại hiệu quả đo đếm được.",
      highlights: ["Làm = Xắn tay nhận việc", "Làm đúng = Thượng tôn pháp luật", "Hiệu quả = Phá vỡ sức ì"]
    },
    {
      id: 3,
      title: "3. Tấm khiên Thể chế",
      subtitle: "Nghị quyết 24-NQ/TW & Hệ thống KPI",
      badge: "Bệ phóng",
      color: "from-blue-900 to-indigo-950",
      content: "Nghị quyết số 24-NQ/TW ngày 22-8-2026 của Bộ Chính trị là 'tấm khiên' bảo vệ cán bộ đổi mới sáng tạo vì lợi ích chung, xóa bỏ tâm lý sợ sai. Kết hợp hệ thống KPI định lượng sản phẩm đầu ra.",
      highlights: ["Bảo vệ cán bộ dám nghĩ dám làm", "Xóa tâm lý sợ trách nhiệm", "Đo lường định lượng bằng KPI"]
    },
    {
      id: 4,
      title: "4. Kết quả Thực tiễn vì Dân",
      subtitle: "Những chuyển động trong đời sống thường nhật",
      badge: "Sản phẩm",
      color: "from-emerald-950 to-teal-900",
      content: "Giải quyết dự án tồn đọng, hạ tầng đô thị, thủ tục hành chính nhanh hơn; trường nội trú biên giới, miễn học phí công lập, khám sức khỏe tầm soát miễn phí cho người dân.",
      highlights: ["Trường nội trú xã biên giới", "Miễn học phí công lập", "Khám sức khỏe miễn phí"]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-2xl p-6 shadow-sm space-y-2 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-950 text-red-900 dark:text-red-300 text-xs font-mono font-bold rounded uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sơ Đồ Tương Tác Chu Trình Hành Động</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 dark:text-stone-100">
          Hành Trình Chuyển Hóa: Từ Thông Điệp Chỉ Đạo Đến Nụ Cười Người Dân
        </h2>
        <p className="text-sm font-sans text-stone-600 dark:text-stone-300 max-w-3xl">
          Bấm vào từng chặng trong sơ đồ để khám phá cơ chế vận hành của thông điệp “Làm và làm đúng, làm quyết liệt, hiệu quả”.
        </p>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveStep(s.id)}
            className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-44 ${
              activeStep === s.id
                ? 'bg-stone-900 text-white border-stone-950 shadow-xl ring-2 ring-red-800'
                : 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border-stone-300 dark:border-stone-800 hover:border-red-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                activeStep === s.id ? 'bg-red-800 text-amber-200' : 'bg-stone-200 dark:bg-stone-800 text-stone-600'
              }`}>
                {s.badge}
              </span>
              <span className="text-xl font-mono font-black opacity-40">0{s.id}</span>
            </div>

            <div>
              <h3 className="text-sm font-serif font-bold leading-snug">
                {s.title}
              </h3>
              <p className={`text-[11px] mt-1 line-clamp-2 ${activeStep === s.id ? 'text-stone-300' : 'text-stone-500'}`}>
                {s.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-semibold text-red-700 dark:text-red-400">
              <span>Khám phá ngay</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </button>
        ))}
      </div>

      {/* Active Step Detailed Showcase Canvas */}
      {(() => {
        const cur = steps.find(s => s.id === activeStep) || steps[0];
        return (
          <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-black text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                  CHẶNG {cur.id} / 04: {cur.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  {cur.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {cur.highlights.map((h, i) => (
                  <span key={i} className="text-[11px] font-mono bg-stone-800 text-amber-300 px-3 py-1 rounded-full border border-stone-700">
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg font-serif italic text-stone-200 leading-relaxed max-w-4xl">
              “{cur.content}”
            </p>

            <div className="pt-4 flex items-center justify-between text-xs font-sans text-stone-400 border-t border-stone-800">
              <span>Trụ cột cốt lõi nhiệm kỳ 2026-2031</span>
              <button
                onClick={() => setActiveStep((activeStep % 4) + 1)}
                className="text-amber-400 hover:underline font-bold flex items-center gap-1"
              >
                <span>Chuyển chặng tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })()}

    </section>
  );
};
