import React from 'react';
import { OpinionBox } from '../data/opinionData';
import { Play, Pause, Square, Volume2, X, FastForward, User } from 'lucide-react';

interface AudioPlayerBarProps {
  box: OpinionBox;
  isPlaying: boolean;
  onPlayPause: () => void;
  onStop: () => void;
  speechRate: number;
  setSpeechRate: (rate: number) => void;
  currentParagraphIdx: number;
  totalParagraphs: number;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  box,
  isPlaying,
  onPlayPause,
  onStop,
  speechRate,
  setSpeechRate,
  currentParagraphIdx,
  totalParagraphs
}) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 bg-stone-950/95 text-stone-100 border border-stone-800 rounded-2xl p-4 shadow-2xl backdrop-blur-md no-print transition-all">
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-stone-800">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-amber-500/50">
            <img
              src={box.image}
              alt={box.speaker}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <div className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
              ĐANG ĐỌC Y KIẾN
            </div>
            <div className="text-xs font-serif font-bold text-white truncate">
              {box.speaker}
            </div>
          </div>
        </div>

        <button
          onClick={onStop}
          className="text-stone-400 hover:text-white p-1 transition-colors"
          title="Tắt trình đọc giọng nói"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress & Controls */}
      <div className="pt-3 space-y-3">
        <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono">
          <span>Đoạn {currentParagraphIdx + 1} / {totalParagraphs}</span>
          <div className="flex items-center gap-1">
            <span className="text-stone-500">Tốc độ:</span>
            {[0.9, 1.0, 1.2].map((r) => (
              <button
                key={r}
                onClick={() => setSpeechRate(r)}
                className={`px-1.5 py-0.5 rounded text-[10px] ${
                  speechRate === r ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-800 text-stone-300'
                }`}
              >
                {r}x
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-red-600 to-amber-400 h-full transition-all duration-300"
            style={{ width: `${((currentParagraphIdx + 1) / totalParagraphs) * 100}%` }}
          />
        </div>

        {/* Play/Pause/Stop Buttons */}
        <div className="flex items-center justify-center gap-4 pt-1">
          <button
            onClick={onPlayPause}
            className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold hover:bg-amber-400 transition-transform active:scale-95 shadow-md"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            onClick={onStop}
            className="p-2 text-stone-400 hover:text-stone-100 transition-colors"
            title="Dừng hẳn"
          >
            <Square className="w-4 h-4 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
};
