import React, { useState } from 'react';
import { OpinionBox } from '../data/opinionData';
import { Volume2, Share2, Copy, Check, ChevronDown, ChevronUp, Sparkles, BookOpen, ExternalLink, ShieldCheck, Scale, BarChart3, GraduationCap, Building2, Layers, TrendingUp, HeartPulse, FileCheck, HelpCircle, Zap } from 'lucide-react';

interface BoxCardProps {
  box: OpinionBox;
  textSize: 'sm' | 'md' | 'lg';
  searchQuery: string;
  isPlayingAudio: boolean;
  activeAudioBoxId: string | null;
  onPlayAudio: (box: OpinionBox) => void;
  onOpenSpotlight: (box: OpinionBox) => void;
  onOpenQuoteGen: (box: OpinionBox, quoteText: string) => void;
}

export const BoxCard: React.FC<BoxCardProps> = ({
  box,
  textSize,
  searchQuery,
  isPlayingAudio,
  activeAudioBoxId,
  onPlayAudio,
  onOpenSpotlight,
  onOpenQuoteGen
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [copiedQuoteIndex, setCopiedQuoteIndex] = useState<number | null>(null);

  // Helper for font size class
  const getTextSizeClass = () => {
    switch (textSize) {
      case 'sm': return 'text-xs sm:text-sm leading-relaxed';
      case 'lg': return 'text-base sm:text-lg leading-loose';
      default: return 'text-sm sm:text-base leading-relaxed';
    }
  };

  // Helper for highlighting search query in paragraph text
  const renderHighlightedText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <mark key={i} className="bg-amber-300 dark:bg-amber-700 text-stone-900 dark:text-white px-0.5 rounded font-bold">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  // Icon mapping helper for keyPillars
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />;
      case 'Scale': return <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />;
      case 'CheckCircle': return <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'Shield': return <ShieldCheck className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />;
      case 'Layers': return <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />;
      case 'Building2': return <Building2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />;
      case 'FileCheck': return <FileCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />;
      default: return <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />;
    }
  };

  const handleCopyQuote = (quote: string, index: number) => {
    navigator.clipboard.writeText(`"${quote}" - ${box.speaker}`);
    setCopiedQuoteIndex(index);
    setTimeout(() => setCopiedQuoteIndex(null), 2000);
  };

  const isCurrentAudio = activeAudioBoxId === box.id && isPlayingAudio;

  return (
    <article
      id={box.id}
      className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Box Header Ribbon */}
      <div className="p-4 sm:p-6 border-b border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-800/50 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={`px-2.5 py-1 text-xs font-sans font-bold rounded-md uppercase tracking-wider ${box.badgeColor}`}>
            {box.badge}
          </span>
        </div>

        {/* Audio Button */}
        <button
          onClick={() => onPlayAudio(box)}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
            isCurrentAudio
              ? 'bg-red-800 text-white border-red-900 animate-pulse shadow-sm'
              : 'bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700'
          }`}
          title="Nghe giọng đọc ý kiến này"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>{isCurrentAudio ? 'Đang đọc...' : 'Nghe ý kiến'}</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Speaker Profile Header */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          
          {/* Portrait Image (4 cols) */}
          <div className="sm:col-span-4 flex flex-col items-center sm:items-start">
            <div className="relative group w-40 sm:w-full aspect-4/5 rounded-xl overflow-hidden border-2 border-stone-300 dark:border-stone-700 shadow-md">
              <img
                src={box.image}
                alt={box.speaker}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-2 right-2 text-[10px] text-stone-200 font-sans italic text-center sm:text-left truncate">
                {box.imageCaption}
              </div>
            </div>
          </div>

          {/* Speaker Titles & Headline (8 cols) */}
          <div className="sm:col-span-8 space-y-2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-serif font-black text-stone-900 dark:text-stone-100 tracking-tight">
              {box.speaker}
            </h2>
            <p className="text-xs sm:text-sm font-sans font-medium text-red-900 dark:text-red-400">
              {box.role}
            </p>
            <p className="text-xs font-mono text-stone-500 dark:text-stone-400">
              {box.organization}
            </p>

            <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-stone-100 leading-snug">
                “{box.headline}”
              </h3>
              <p className="text-xs font-sans text-stone-600 dark:text-stone-300 mt-1">
                {box.subtitle}
              </p>
            </div>
          </div>

        </div>

        {/* Featured Pull Quote Box */}
        <div className="p-4 sm:p-5 bg-stone-100/90 dark:bg-stone-800/80 border-l-4 border-red-800 dark:border-red-600 rounded-r-xl relative group">
          <p className="text-sm sm:text-base font-serif italic text-stone-800 dark:text-stone-200 leading-relaxed">
            “{box.coreQuote}”
          </p>

          <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-200 dark:border-stone-700 text-xs text-stone-500">
            <span className="font-sans font-medium text-amber-800 dark:text-amber-400">Trích trọn vẹn thông điệp</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopyQuote(box.coreQuote, 0)}
                className="flex items-center gap-1 text-xs text-stone-600 dark:text-stone-300 hover:text-red-800 dark:hover:text-red-400 transition-colors"
                title="Sao chép trích dẫn"
              >
                {copiedQuoteIndex === 0 ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedQuoteIndex === 0 ? 'Đã chép' : 'Sao chép'}</span>
              </button>

              <button
                onClick={() => onOpenQuoteGen(box, box.coreQuote)}
                className="flex items-center gap-1 text-xs text-red-800 dark:text-red-400 font-semibold hover:underline"
                title="Tạo ảnh trích dẫn thiết kế"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Tạo Card</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Strategic Key Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {box.keyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-3 bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 rounded-lg flex items-start gap-2.5"
            >
              {getPillarIcon(pillar.iconName)}
              <div>
                <h4 className="text-xs font-serif font-bold text-stone-900 dark:text-stone-100">
                  {pillar.title}
                </h4>
                <p className="text-[11px] text-stone-600 dark:text-stone-400 mt-0.5 leading-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Paragraphs Reading Content */}
        <div className={`space-y-4 font-reading ${getTextSizeClass()} text-stone-800 dark:text-stone-200`}>
          {box.paragraphs
            .slice(0, isExpanded ? box.paragraphs.length : 2)
            .map((p) => (
              <div
                key={p.id}
                className={`p-3 rounded-lg transition-colors ${
                  p.isHighlight
                    ? 'bg-amber-500/10 dark:bg-amber-500/15 border-l-2 border-amber-600 dark:border-amber-400'
                    : ''
                }`}
              >
                {p.highlightTag && (
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/50 px-2 py-0.5 rounded mb-1">
                    {p.highlightTag}
                  </span>
                )}
                <p className="leading-relaxed">
                  {renderHighlightedText(p.text)}
                </p>
              </div>
            ))}
        </div>

        {/* Unboxed Metadata / Tags */}
        <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800">
          <span className="font-semibold text-stone-700 dark:text-stone-300">Chủ đề:</span>
          {box.tags.map((tag, i) => (
            <React.Fragment key={tag}>
              <span className="text-stone-600 dark:text-stone-400 hover:text-red-800 transition-colors cursor-pointer">
                #{tag}
              </span>
              {i < box.tags.length - 1 && <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>}
            </React.Fragment>
          ))}
        </div>

      </div>

      {/* Card Action Footer */}
      <div className="p-4 bg-stone-100/80 dark:bg-stone-800/80 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-red-800 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              <span>Thu gọn bài viết</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              <span>Đọc toàn bộ ({box.paragraphs.length} đoạn)</span>
            </>
          )}
        </button>

        <button
          onClick={() => onOpenSpotlight(box)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-red-900 hover:bg-red-800 rounded-lg shadow-xs transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Đọc Chuyên Sâu</span>
        </button>
      </div>
    </article>
  );
};
