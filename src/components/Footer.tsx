import React from 'react';
import { ArrowUp, Award, BookOpen, Heart } from 'lucide-react';
import { CORE_ARTICLE_META } from '../data/opinionData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-stone-900 text-stone-300 border-t-4 border-red-900 pt-12 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-red-900 text-amber-100 flex items-center justify-center font-serif font-black text-lg">
                Ý
              </div>
              <span className="text-lg font-serif font-bold text-white">
                CHUYÊN TRANG ĐỒ HỌA BÁO CHÍ
              </span>
            </div>
            <p className="text-xs text-stone-400 max-w-md leading-relaxed font-sans">
              Đồ họa tương tác 3 Box ý kiến tổng hợp quan điểm của Đại biểu Quốc hội và Lãnh đạo TPHCM về thông điệp “Làm và làm đúng, làm quyết liệt, hiệu quả” của Tổng Bí thư, Chủ tịch nước Tô Lâm.
            </p>
          </div>

          {/* Core Principle */}
          <div className="md:col-span-4 p-4 bg-stone-800/60 border border-stone-700 rounded-xl space-y-2">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Nguyên tắc cốt lõi</span>
            </div>
            <p className="text-xs font-serif italic text-stone-200">
              “Chủ trương phải đi vào cuộc sống, quyết sách phải tạo ra thay đổi và mỗi thay đổi cuối cùng phải được người dân cảm nhận bằng những lợi ích cụ thể.”
            </p>
          </div>

          {/* Scroll to top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl border border-stone-700 transition-colors flex items-center gap-2 text-xs font-bold"
              title="Về đầu trang"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <div>
            © 2026 Chuyên trang Đồ họa Báo chí. Mọi ý kiến trích dẫn trọn vẹn theo chuyên đề.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Thực hiện vì mục tiêu:</span>
            <span className="font-bold text-amber-400">Tất cả vì lợi ích nhân dân</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
