import React, { useState } from 'react';
import { OPINION_BOXES, OpinionBox } from '../data/opinionData';
import { X, ChevronRight } from 'lucide-react';

interface PodiumBoxInfographicProps {
  textSize: 'sm' | 'md' | 'lg';
}

export const PodiumBoxInfographic: React.FC<PodiumBoxInfographicProps> = ({
  textSize,
}) => {
  const [selectedBoxModal, setSelectedBoxModal] = useState<OpinionBox | null>(null);

  // Exact 3 themes matching the reference image (Option 1: Blue, Option 2: Gold/Yellow, Option 3: Green)
  const boxStyles = [
    {
      // Box 1 (Blue - Option 1)
      bgGradient: "bg-gradient-to-b from-[#4A80BD] via-[#3B72AF] to-[#2B578B] text-white",
      shadow: "shadow-xl hover:shadow-2xl",
      accentBorder: "border-blue-300/40"
    },
    {
      // Box 2 (Light Yellow / Gold - Option 2)
      bgGradient: "bg-gradient-to-b from-[#FDE047] via-[#FACC15] to-[#D97706] text-white",
      shadow: "shadow-xl hover:shadow-2xl",
      accentBorder: "border-yellow-200/60"
    },
    {
      // Box 3 (Emerald Green - Option 3)
      bgGradient: "bg-gradient-to-b from-[#00A569] via-[#008F5A] to-[#006E45] text-white",
      shadow: "shadow-xl hover:shadow-2xl",
      accentBorder: "border-emerald-300/40"
    }
  ];

  // Helper for matching headline text color in modal with the box's theme color
  const getHeadlineTextColor = (boxId: string) => {
    if (boxId === 'box-2') return "text-[#C88100] dark:text-[#F7B12C]";
    if (boxId === 'box-3') return "text-[#006E45] dark:text-[#00A569]";
    return "text-[#2B578B] dark:text-[#4A80BD]";
  };

  return (
    <div className="w-full space-y-8">
      
      {/* 3 Standup Boxes Grid (Bề ngang tổng 1400px) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-[1400px] mx-auto">
        {OPINION_BOXES.map((box, index) => {
          const style = boxStyles[index % boxStyles.length];

          return (
            <div
              key={box.id}
              onClick={() => setSelectedBoxModal(box)}
              className={`group cursor-pointer rounded-t-2xl rounded-b-none p-6 sm:p-7 flex flex-col justify-between min-h-[560px] sm:min-h-[580px] transition-all duration-300 hover:-translate-y-1.5 ${style.bgGradient} ${style.shadow} border-t-4 ${style.accentBorder} relative`}
            >
              {/* Top Section: Portrait & Speaker Info */}
              <div className="space-y-4">
                
                {/* Speaker Portrait Avatar (To 1/4 chiều ngang, bo góc, không viền) */}
                <div className="flex items-center gap-4">
                  <div className="w-1/4 aspect-square rounded-2xl overflow-hidden shadow-md shrink-0 bg-stone-200">
                    <img
                      src={box.image}
                      alt={box.speaker}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="w-3/4 space-y-0.5">
                    <h3 className="text-base sm:text-lg font-serif font-black tracking-tight text-white leading-tight">
                      {box.speaker}
                    </h3>
                    <p className="text-xs text-white/90 font-sans leading-snug">
                      {box.role}
                    </p>
                  </div>
                </div>

                {/* Headline (Tít to hơn) */}
                <div className="pt-2 border-t border-white/25">
                  <h4 className="text-2xl sm:text-3xl font-serif font-black leading-tight text-white break-words [word-break:normal]">
                    {box.headline}
                  </h4>
                </div>

                {/* Expanded Preview Text (Hiển thị trọn vẹn câu và chữ, không ngắt từ hay câu giữa chừng) */}
                <div className="pt-1">
                  <p className="text-xs sm:text-sm font-reading text-white/95 leading-relaxed break-words [word-break:normal]">
                    {box.previewText}
                  </p>
                </div>

              </div>

              {/* Bottom Click Hint Action */}
              <div className="pt-5 border-t border-white/20 flex items-center justify-between text-xs font-sans font-bold text-white/95">
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Xem chi tiết</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULL CONTENT MODAL (Khi click vào box - Nền overlay vàng nhạt #FEF9E7/85, Nền box chi tiết màu trắng bg-white) */}
      {selectedBoxModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FEF9E7]/85 dark:bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header: Chân dung bên trái (bo góc, không viền), Tên + Chức vụ + Tít ở bên phải */}
            <div className="flex items-start justify-between border-b border-stone-300/60 dark:border-stone-800 pb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full">
                {/* Chân dung (To gấp 3 lần, bo góc rounded-2xl, không viền) */}
                <div className="w-48 sm:w-60 aspect-4/5 rounded-2xl overflow-hidden shadow-xl shrink-0 bg-stone-100">
                  <img
                    src={selectedBoxModal.image}
                    alt={selectedBoxModal.speaker}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bên phải chân dung: Tên, Chức vụ và Tít (To hơn, ALL CAPS, Không nền, Màu sắc chuẩn theo màu box) */}
                <div className="space-y-4 text-center sm:text-left flex-1">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 dark:text-stone-100 tracking-tight">
                      {selectedBoxModal.speaker}
                    </h2>
                    <p className="text-xs sm:text-sm font-sans font-semibold text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                      {selectedBoxModal.role}
                    </p>
                  </div>

                  {/* Tít bên phải chân dung: To hơn nữa, ALL CAPS, Không nền, Màu tít trùng với màu box ngoài */}
                  <div className="pt-3 border-t border-stone-200 dark:border-stone-800">
                    <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-black leading-tight uppercase tracking-tight ${getHeadlineTextColor(selectedBoxModal.id)}`}>
                      {selectedBoxModal.headline}
                    </h3>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedBoxModal(null)}
                className="p-2 text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Full Paragraphs Prose (Nội dung liền mạch trên nền trắng) */}
            <div className="space-y-4 font-reading text-base sm:text-lg leading-relaxed text-stone-900 dark:text-stone-100 pt-2">
              {selectedBoxModal.paragraphs.map((p) => (
                <p key={p.id} className="leading-relaxed">
                  {p.text}
                </p>
              ))}
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-end">
              <button
                onClick={() => setSelectedBoxModal(null)}
                className="px-6 py-2.5 text-xs font-bold text-stone-700 dark:text-stone-300 bg-stone-200 dark:bg-stone-800 rounded-none hover:bg-stone-300 transition-colors"
              >
                Đóng
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
