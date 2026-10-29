import React, { useState } from 'react';
import { OPINION_BOXES, OpinionBox } from '../data/opinionData';
import { Layers, ArrowRight, ShieldCheck, CheckCircle2, Award, Zap, HelpCircle } from 'lucide-react';

interface MatrixComparisonProps {
  onSelectBox: (boxId: string) => void;
}

export const MatrixComparison: React.FC<MatrixComparisonProps> = ({ onSelectBox }) => {
  const [selectedDimension, setSelectedDimension] = useState<string>('all');

  const dimensions = [
    { id: 'all', title: 'Tất cả 4 trụ cột' },
    { id: 'thongDiep', title: '1. Thông điệp & Tư tưởng' },
    { id: 'dongLuc', title: '2. Thể chế & Cơ chế' },
    { id: 'hanhDong', title: '3. Hành động Thực tiễn' },
    { id: 'thuocDo', title: '4. Thước đo Lòng dân' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-2xl p-6 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-red-800 dark:text-red-400">
          <Layers className="w-4 h-4" />
          <span>Bảng Đối Chiếu Song Song</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 dark:text-stone-100">
          Ma Trận So Sánh 3 Box Ý Kiến
        </h2>
        <p className="text-sm font-sans text-stone-600 dark:text-stone-300 max-w-3xl">
          So sánh góc nhìn đa chiều từ Đại biểu Quốc hội và Lãnh đạo TPHCM về hành trình biến thông điệp “Làm và làm đúng, làm quyết liệt, hiệu quả” thành sản phẩm thực tiễn.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {dimensions.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDimension(d.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedDimension === d.id
                  ? 'bg-red-900 text-white font-bold shadow-xs'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              {d.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Comparison Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {OPINION_BOXES.map((box) => (
          <div
            key={box.id}
            className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between"
          >
            {/* Box Header */}
            <div className={`p-4 border-b border-stone-200 dark:border-stone-800 ${box.badgeColor} flex items-center justify-between`}>
              <div>
                <span className="text-xs font-sans font-semibold uppercase tracking-wider block opacity-90">
                  {box.badge}
                </span>
                <span className="text-sm font-serif font-bold block">
                  {box.speaker}
                </span>
              </div>

              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/40 shrink-0">
                <img
                  src={box.image}
                  alt={box.speaker}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Matrix Dimension Rows */}
            <div className="p-5 space-y-5 text-xs font-sans divide-y divide-stone-200 dark:divide-stone-800">
              
              {/* Dim 1: Thông điệp */}
              {(selectedDimension === 'all' || selectedDimension === 'thongDiep') && (
                <div className="pt-3 first:pt-0 space-y-1">
                  <span className="font-mono font-bold uppercase text-red-800 dark:text-red-400 block text-[11px]">
                    1. Thông điệp &amp; Ý nghĩa:
                  </span>
                  <p className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">
                    “{box.headline}”
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    {box.matrixHighlights.thongDiep}
                  </p>
                </div>
              )}

              {/* Dim 2: Thể chế */}
              {(selectedDimension === 'all' || selectedDimension === 'dongLuc') && (
                <div className="pt-3 space-y-1">
                  <span className="font-mono font-bold uppercase text-amber-800 dark:text-amber-400 block text-[11px]">
                    2. Thể chế &amp; Động lực:
                  </span>
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed font-medium">
                    {box.matrixHighlights.dongLuc}
                  </p>
                </div>
              )}

              {/* Dim 3: Hành động */}
              {(selectedDimension === 'all' || selectedDimension === 'hanhDong') && (
                <div className="pt-3 space-y-1">
                  <span className="font-mono font-bold uppercase text-blue-800 dark:text-blue-400 block text-[11px]">
                    3. Hành động Cụ thể:
                  </span>
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                    {box.matrixHighlights.hanhDong}
                  </p>
                </div>
              )}

              {/* Dim 4: Thước đo */}
              {(selectedDimension === 'all' || selectedDimension === 'thuocDo') && (
                <div className="pt-3 space-y-1">
                  <span className="font-mono font-bold uppercase text-emerald-800 dark:text-emerald-400 block text-[11px]">
                    4. Thước đo Lòng dân:
                  </span>
                  <p className="text-stone-800 dark:text-stone-200 font-semibold leading-relaxed">
                    {box.matrixHighlights.thuocDo}
                  </p>
                </div>
              )}

            </div>

            {/* Footer Action */}
            <div className="p-4 bg-stone-50 dark:bg-stone-800/50 border-t border-stone-200 dark:border-stone-800">
              <button
                onClick={() => onSelectBox(box.id)}
                className="w-full py-2 text-xs font-bold text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg hover:border-red-800 hover:text-red-900 transition-colors flex items-center justify-center gap-1"
              >
                <span>Xem chi tiết ý kiến</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
