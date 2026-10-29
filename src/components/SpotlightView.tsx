import React, { useState } from 'react';
import { OpinionBox, OPINION_BOXES } from '../data/opinionData';
import { Volume2, ArrowLeft, ArrowRight, Share2, Copy, Check, Quote, Sparkles, ShieldCheck, Bookmark, BookOpen } from 'lucide-react';

interface SpotlightViewProps {
  box: OpinionBox;
  onSelectBox: (boxId: string) => void;
  textSize: 'sm' | 'md' | 'lg';
  isPlayingAudio: boolean;
  activeAudioBoxId: string | null;
  onPlayAudio: (box: OpinionBox) => void;
  onOpenQuoteGen: (box: OpinionBox, quoteText: string) => void;
  onBackToGrid: () => void;
}

export const SpotlightView: React.FC<SpotlightViewProps> = ({
  box,
  onSelectBox,
  textSize,
  isPlayingAudio,
  activeAudioBoxId,
  onPlayAudio,
  onOpenQuoteGen,
  onBackToGrid
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const getTextSizeClass = () => {
    switch (textSize) {
      case 'sm': return 'text-sm sm:text-base leading-relaxed';
      case 'lg': return 'text-lg sm:text-xl leading-loose';
      default: return 'text-base sm:text-lg leading-relaxed';
    }
  };

  const handleCopy = (quote: string, idx: number) => {
    navigator.clipboard.writeText(`"${quote}" - ${box.speaker}`);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const currentBoxIndex = OPINION_BOXES.findIndex(b => b.id === box.id);
  const prevBox = OPINION_BOXES[(currentBoxIndex - 1 + OPINION_BOXES.length) % OPINION_BOXES.length];
  const nextBox = OPINION_BOXES[(currentBoxIndex + 1) % OPINION_BOXES.length];

  const isCurrentAudio = activeAudioBoxId === box.id && isPlayingAudio;

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Navigation Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-300 dark:border-stone-800 pb-4">
        <button
          onClick={onBackToGrid}
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-700 dark:text-stone-300 hover:text-red-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Trở về giao diện 3 Box</span>
        </button>

        {/* Box Selector Tabs */}
        <div className="flex items-center gap-2 bg-stone-200/80 dark:bg-stone-800 p-1 rounded-lg">
          {OPINION_BOXES.map((b) => (
            <button
              key={b.id}
              onClick={() => onSelectBox(b.id)}
              className={`px-3 py-1.5 text-xs font-serif font-bold rounded-md transition-all ${
                b.id === box.id
                  ? 'bg-red-900 text-white shadow-sm'
                  : 'text-stone-700 dark:text-stone-300 hover:text-red-900'
              }`}
            >
              {b.speaker}
            </button>
          ))}
        </div>

        {/* Audio Button */}
        <button
          onClick={() => onPlayAudio(box)}
          className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
            isCurrentAudio
              ? 'bg-red-800 text-white border-red-900 animate-pulse'
              : 'bg-white dark:bg-stone-800 border-stone-300 text-stone-800 dark:text-stone-200 hover:bg-stone-100'
          }`}
        >
          <Volume2 className="w-4 h-4 text-amber-300" />
          <span>{isCurrentAudio ? 'Đang phát...' : 'Nghe bài nói'}</span>
        </button>
      </div>

      {/* Hero Header Article Canvas */}
      <div className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
        
        {/* Speaker Profile Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-stone-200 dark:border-stone-800 pb-8">
          
          {/* Speaker Portrait (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-56 sm:w-64 aspect-4/5 rounded-2xl overflow-hidden border-4 border-stone-200 dark:border-stone-700 shadow-xl">
              <img
                src={box.image}
                alt={box.speaker}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-stone-200 font-sans italic text-center">
                {box.imageCaption}
              </div>
            </div>
          </div>

          {/* Speaker Info & Title (8 cols) */}
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className={`px-3 py-1 text-xs font-sans font-bold rounded-md uppercase tracking-wider ${box.badgeColor}`}>
                {box.badge}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
              {box.speaker}
            </h1>

            <p className="text-sm sm:text-base font-sans font-semibold text-red-900 dark:text-red-400">
              {box.role}
            </p>

            <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 italic leading-snug">
                “{box.headline}”
              </h2>
              <p className="text-sm font-sans text-stone-600 dark:text-stone-300">
                {box.subtitle}
              </p>
            </div>
          </div>

        </div>

        {/* Highlighted Key Quotes Ribbon */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest font-bold text-stone-500 dark:text-stone-400">
            Các trích dẫn điểm nhấn (Key Quotes):
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {box.keyQuotes.map((q, idx) => (
              <div
                key={idx}
                className="p-4 bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-xl relative flex flex-col justify-between space-y-3"
              >
                <Quote className="w-5 h-5 text-red-800/30" />
                <p className="text-xs sm:text-sm font-serif italic text-stone-800 dark:text-stone-200 leading-relaxed">
                  “{q}”
                </p>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-200 dark:border-stone-700">
                  <button
                    onClick={() => handleCopy(q, idx)}
                    className="flex items-center gap-1 text-stone-500 hover:text-stone-900 dark:hover:text-white"
                  >
                    {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIndex === idx ? 'Đã sao chép' : 'Sao chép'}</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteGen(box, q)}
                    className="flex items-center gap-1 font-bold text-red-800 dark:text-red-400 hover:underline"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Tạo Card</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Verbatim Text Prose Section */}
        <div className="max-w-prose mx-auto space-y-6 pt-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 pb-2 border-b border-stone-200 dark:border-stone-800">
            <BookOpen className="w-4 h-4 text-red-800" />
            <span>Toàn văn phát biểu / Ý kiến đầy đủ</span>
          </div>

          <div className={`space-y-6 font-reading ${getTextSizeClass()} text-stone-800 dark:text-stone-200`}>
            {box.paragraphs.map((p, idx) => (
              <div
                key={p.id}
                className={`p-4 rounded-xl transition-colors ${
                  idx === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-red-900 dark:first-letter:text-red-400'
                    : ''
                } ${
                  p.isHighlight
                    ? 'bg-amber-500/10 dark:bg-amber-500/15 border-l-4 border-amber-600 dark:border-amber-400 shadow-2xs'
                    : ''
                }`}
              >
                {p.highlightTag && (
                  <span className="inline-block text-xs font-mono uppercase tracking-wider font-bold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-900/60 px-2.5 py-0.5 rounded-md mb-2">
                    {p.highlightTag}
                  </span>
                )}
                <p className="leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Matrix Breakdown Summary */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Tổng hợp luận điểm cốt lõi (Matrix Summary):</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-3 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg">
              <span className="font-bold text-red-800 dark:text-red-400 block mb-1">1. Thông điệp chỉ đạo:</span>
              <p className="text-stone-700 dark:text-stone-300">{box.matrixHighlights.thongDiep}</p>
            </div>
            <div className="p-3 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg">
              <span className="font-bold text-red-800 dark:text-red-400 block mb-1">2. Động lực thể chế:</span>
              <p className="text-stone-700 dark:text-stone-300">{box.matrixHighlights.dongLuc}</p>
            </div>
            <div className="p-3 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg">
              <span className="font-bold text-red-800 dark:text-red-400 block mb-1">3. Hành động thực tiễn:</span>
              <p className="text-stone-700 dark:text-stone-300">{box.matrixHighlights.hanhDong}</p>
            </div>
            <div className="p-3 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg">
              <span className="font-bold text-red-800 dark:text-red-400 block mb-1">4. Thước đo thành công:</span>
              <p className="text-stone-700 dark:text-stone-300">{box.matrixHighlights.thuocDo}</p>
            </div>
          </div>
        </div>

      </div>

      {/* Prev / Next Footer Navigation */}
      <div className="flex items-center justify-between gap-4 pt-4">
        <button
          onClick={() => onSelectBox(prevBox.id)}
          className="flex items-center gap-2 p-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-xl hover:border-red-800 text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{prevBox.speaker}</span>
        </button>

        <button
          onClick={() => onSelectBox(nextBox.id)}
          className="flex items-center gap-2 p-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-xl hover:border-red-800 text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-semibold transition-all"
        >
          <span>{nextBox.speaker}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
