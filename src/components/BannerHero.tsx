import React from 'react';
import { Quote, ArrowRight, ShieldCheck, Award, Sparkles, Building2, Layers } from 'lucide-react';
import { CORE_ARTICLE_META } from '../data/opinionData';

interface BannerHeroProps {
  onSelectBox: (boxId: string) => void;
  selectedBoxId: string | null;
}

export const BannerHero: React.FC<BannerHeroProps> = ({ onSelectBox, selectedBoxId }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] dark:from-stone-900 dark:via-stone-900/90 dark:to-stone-900 border-b border-stone-300 dark:border-stone-800 pt-8 pb-12">
      {/* Newspaper Masthead Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        {/* Hero Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Title & Context (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950 text-amber-200 text-xs font-semibold rounded uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Góc nhìn Đại biểu Quốc hội &amp; Lãnh đạo TPHCM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
              Đồ họa tương tác <br />
              <span className="text-red-800 dark:text-red-400 underline decoration-red-800/30 decoration-4 underline-offset-8">
                3 Box Ý Kiến
              </span>
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-stone-700 dark:text-stone-300 leading-relaxed max-w-2xl">
              Phân tích chiều sâu thông điệp chỉ đạo của Tổng Bí thư, Chủ tịch nước Tô Lâm và các giải pháp đột phá thể chế, quản trị địa phương, hành chính vì dân trong kỷ nguyên mới.
            </p>

            {/* 3 "LÀM" Summary Micro-cards */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="p-3 bg-white/80 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-lg shadow-2xs">
                <div className="text-xs font-bold text-red-800 dark:text-red-400 uppercase tracking-wider">
                  Chữ LÀM 1
                </div>
                <div className="text-xs font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  Xắn tay vào việc
                </div>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 leading-snug hidden sm:block">
                  Chấm dứt chỉ đạo trên giấy, nói suông, bàn lùi
                </p>
              </div>

              <div className="p-3 bg-white/80 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-lg shadow-2xs">
                <div className="text-xs font-bold text-red-800 dark:text-red-400 uppercase tracking-wider">
                  Chữ LÀM 2
                </div>
                <div className="text-xs font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  Làm đúng
                </div>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 leading-snug hidden sm:block">
                  Thượng tôn pháp luật, bám sát chủ trương của Đảng
                </p>
              </div>

              <div className="p-3 bg-white/80 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-lg shadow-2xs">
                <div className="text-xs font-bold text-red-800 dark:text-red-400 uppercase tracking-wider">
                  Chữ LÀM 3
                </div>
                <div className="text-xs font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  Quyết liệt, hiệu quả
                </div>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 leading-snug hidden sm:block">
                  Dấn thân phá vỡ sức ì, tạo kết quả đo đếm được
                </p>
              </div>
            </div>

          </div>

          {/* Central Quote Highlight Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-red-950 via-red-900 to-amber-950 text-amber-50 rounded-2xl shadow-xl border border-red-800/50">
              <Quote className="w-10 h-10 text-amber-400/30 absolute top-4 right-4" />
              
              <div className="text-xs font-mono uppercase tracking-widest text-amber-300/80 mb-2 font-semibold">
                Kim chỉ nam hành động
              </div>

              <blockquote className="text-xl sm:text-2xl font-serif font-bold italic text-amber-100 leading-snug mb-4">
                “Làm và làm đúng, làm quyết liệt, hiệu quả - tất cả vì lợi ích của nhân dân”
              </blockquote>

              <div className="pt-4 border-t border-amber-500/30 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-amber-200">
                    {CORE_ARTICLE_META.quoteLeader}
                  </div>
                  <div className="text-xs text-amber-300/80">
                    Thông điệp quán xuyến kỷ nguyên mới
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-400/30">
                  <Award className="w-5 h-5 text-amber-300" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Nav Anchors for 3 Boxes */}
        <div className="mt-8 pt-6 border-t border-stone-300 dark:border-stone-800">
          <div className="text-xs font-sans uppercase font-bold text-stone-500 dark:text-stone-400 tracking-wider mb-3 flex items-center gap-2">
            <span>Chọn Box Ý Kiến để xem chi tiết:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            
            {/* Box 1 Quick Nav */}
            <button
              onClick={() => onSelectBox('box-1')}
              className={`p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                selectedBoxId === 'box-1'
                  ? 'bg-amber-900 text-white border-amber-950 shadow-md ring-2 ring-amber-700'
                  : 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 border-stone-200 dark:border-stone-700 hover:border-amber-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-stone-300">
                  <img
                    src="/assets/aistudio/box_1_DBQH_Bui_Hoa_Son_21975a4a.jpg"
                    alt="ĐBQH Bùi Hoài Sơn"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
                    BOX 1
                  </div>
                  <div className="text-xs font-serif font-bold truncate max-w-[180px]">
                    ĐBQH Bùi Hoài Sơn
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 truncate max-w-[180px]">
                    Tạo dựng đồng thuận từ thực tiễn vì dân
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 shrink-0 opacity-70" />
            </button>

            {/* Box 2 Quick Nav */}
            <button
              onClick={() => onSelectBox('box-2')}
              className={`p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                selectedBoxId === 'box-2'
                  ? 'bg-blue-900 text-white border-blue-950 shadow-md ring-2 ring-blue-700'
                  : 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 border-stone-200 dark:border-stone-700 hover:border-blue-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-stone-300">
                  <img
                    src="/assets/aistudio/Box_2_Dong_chi_Nguyen_Manh_Cuong_6060bad5.jpg"
                    alt="Đồng chí Nguyễn Mạnh Cường"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-blue-700 dark:text-blue-400">
                    BOX 2
                  </div>
                  <div className="text-xs font-serif font-bold truncate max-w-[180px]">
                    Đ/c Nguyễn Mạnh Cường
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 truncate max-w-[180px]">
                    Kiến tạo không gian phát triển bền vững
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 shrink-0 opacity-70" />
            </button>

            {/* Box 3 Quick Nav */}
            <button
              onClick={() => onSelectBox('box-3')}
              className={`p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                selectedBoxId === 'box-3'
                  ? 'bg-rose-900 text-white border-rose-950 shadow-md ring-2 ring-rose-700'
                  : 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 border-stone-200 dark:border-stone-700 hover:border-rose-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-stone-300">
                  <img
                    src="/assets/aistudio/Box_3_DBQH_NGuyen_Thi_Viet_Nga_4316022b.jpg"
                    alt="ĐBQH Nguyễn Thị Việt Nga"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-rose-700 dark:text-rose-400">
                    BOX 3
                  </div>
                  <div className="text-xs font-serif font-bold truncate max-w-[180px]">
                    ĐBQH Nguyễn Thị Việt Nga
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 truncate max-w-[180px]">
                    Luôn tự hỏi những việc mình làm...
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 shrink-0 opacity-70" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};
