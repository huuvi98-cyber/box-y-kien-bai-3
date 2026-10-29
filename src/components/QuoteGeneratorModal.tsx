import React, { useState } from 'react';
import { OpinionBox } from '../data/opinionData';
import { X, Copy, Check, Quote, Sparkles, Download, Share2 } from 'lucide-react';

interface QuoteGeneratorModalProps {
  box: OpinionBox;
  quoteText: string;
  onClose: () => void;
}

export const QuoteGeneratorModal: React.FC<QuoteGeneratorModalProps> = ({
  box,
  quoteText,
  onClose
}) => {
  const [styleTheme, setStyleTheme] = useState<'red' | 'dark' | 'paper' | 'navy'>('red');
  const [copied, setCopied] = useState<boolean>(false);

  const getCardClasses = () => {
    switch (styleTheme) {
      case 'dark':
        return 'bg-stone-950 text-stone-100 border-stone-800';
      case 'paper':
        return 'bg-[#FAF6EE] text-stone-900 border-amber-900/30';
      case 'navy':
        return 'bg-blue-950 text-blue-50 border-blue-900';
      default:
        return 'bg-gradient-to-br from-red-950 via-red-900 to-amber-950 text-amber-50 border-red-800';
    }
  };

  const handleCopyFormatted = () => {
    const formatted = `“${quoteText}”\n\n— ${box.speaker}\n${box.role}\n(Trích Chuyên đề Đồ họa 3 Box Ý Kiến)`;
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm no-print">
      <div className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-red-800 dark:text-red-400">
            <Sparkles className="w-4 h-4" />
            <span>Tạo Card Trích Dẫn Chia Sẻ</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Style Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-sans text-stone-500 font-semibold">Chủ đề mẫu:</span>
          <button
            onClick={() => setStyleTheme('red')}
            className={`w-6 h-6 rounded-full bg-red-900 border-2 ${styleTheme === 'red' ? 'ring-2 ring-red-500 border-white' : 'border-transparent'}`}
            title="Sắc đỏ truyền thống"
          />
          <button
            onClick={() => setStyleTheme('dark')}
            className={`w-6 h-6 rounded-full bg-stone-950 border-2 ${styleTheme === 'dark' ? 'ring-2 ring-stone-500 border-white' : 'border-transparent'}`}
            title="Đen sang trọng"
          />
          <button
            onClick={() => setStyleTheme('paper')}
            className={`w-6 h-6 rounded-full bg-[#FAF6EE] border-2 ${styleTheme === 'paper' ? 'ring-2 ring-amber-600 border-stone-400' : 'border-transparent'}`}
            title="Giấy báo cổ điển"
          />
          <button
            onClick={() => setStyleTheme('navy')}
            className={`w-6 h-6 rounded-full bg-blue-950 border-2 ${styleTheme === 'navy' ? 'ring-2 ring-blue-500 border-white' : 'border-transparent'}`}
            title="Xanh đô thị"
          />
        </div>

        {/* Live Preview Card */}
        <div className={`p-6 sm:p-8 rounded-2xl border shadow-xl space-y-6 relative overflow-hidden transition-all ${getCardClasses()}`}>
          <Quote className="w-12 h-12 opacity-20 absolute top-4 right-4" />

          <div className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-75">
            E-MAGAZINE / TRÍCH DẪN
          </div>

          <blockquote className="text-base sm:text-lg font-serif font-bold italic leading-relaxed">
            “{quoteText}”
          </blockquote>

          <div className="pt-4 border-t border-current/20 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-current/30 shrink-0">
              <img
                src={box.image}
                alt={box.speaker}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-serif font-bold">
                {box.speaker}
              </div>
              <div className="text-xs opacity-80 font-sans">
                {box.role}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900"
          >
            Hủy bỏ
          </button>

          <button
            onClick={handleCopyFormatted}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-red-900 hover:bg-red-800 rounded-xl shadow-md transition-all active:scale-95"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Đã sao chép Card Text!' : 'Sao chép dạng Văn Bản'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
