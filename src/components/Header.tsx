import React from 'react';
import { Volume2, VolumeX, Type, Sun, Moon, BookOpen, Printer, Search } from 'lucide-react';

interface HeaderProps {
  textSize: 'sm' | 'md' | 'lg';
  setTextSize: (size: 'sm' | 'md' | 'lg') => void;
  themeMode: 'paper' | 'dark' | 'light';
  setThemeMode: (mode: 'paper' | 'dark' | 'light') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isPlayingAudio: boolean;
  activeAudioBoxId: string | null;
  onToggleAudio: () => void;
  activeTab: 'grid' | 'spotlight' | 'matrix' | 'flow';
  setActiveTab: (tab: 'grid' | 'spotlight' | 'matrix' | 'flow') => void;
}

export const Header: React.FC<HeaderProps> = ({
  textSize,
  setTextSize,
  themeMode,
  setThemeMode,
  searchQuery,
  setSearchQuery,
  isPlayingAudio,
  onToggleAudio,
  activeTab,
  setActiveTab
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-300 dark:border-stone-800 bg-[#FAF8F5]/95 dark:bg-stone-900/95 backdrop-blur-md transition-colors no-print">
      {/* Top Red Editorial Marker Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-800 via-red-600 to-amber-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Top Bar Contract - 3 Zones */}
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded bg-red-900 text-amber-100 flex items-center justify-center font-serif font-black text-xl shadow-sm">
              Ý
            </div>
            <div>
              <a href="#" className="text-lg sm:text-xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap block hover:text-red-800 transition-colors">
                E-MAGAZINE / ĐỒ HỌA 3 BOX Ý KIẾN
              </a>
              <span className="text-[11px] font-sans text-stone-500 dark:text-stone-400 block tracking-wider uppercase font-medium">
                Chuyên trang Báo chí &amp; Thể chế
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links / View Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-stone-200/70 dark:bg-stone-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('grid')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'grid'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-sm font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              3 Box Ý Kiến
            </button>
            <button
              onClick={() => setActiveTab('spotlight')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'spotlight'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-sm font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              Đọc Chuyên Sâu
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'matrix'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-sm font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              Ma Trận So Sánh
            </button>
            <button
              onClick={() => setActiveTab('flow')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'flow'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-sm font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              Sơ Đồ 3 Chữ LÀM
            </button>
          </nav>

          {/* Zone 3: Toolbar Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Input Filter */}
            <div className="relative hidden md:block w-40 lg:w-48">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Tìm từ khóa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-2 py-1 text-xs bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-md focus:outline-none focus:border-red-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  ×
                </button>
              )}
            </div>

            {/* Font Size Toggle */}
            <div className="flex items-center bg-stone-200/80 dark:bg-stone-800 rounded-md p-0.5 text-xs">
              <button
                onClick={() => setTextSize('sm')}
                title="Cỡ chữ nhỏ"
                className={`px-2 py-1 rounded font-serif ${textSize === 'sm' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white font-bold shadow-xs' : 'text-stone-600 dark:text-stone-400'}`}
              >
                A-
              </button>
              <button
                onClick={() => setTextSize('md')}
                title="Cỡ chữ vừa"
                className={`px-2 py-1 rounded font-serif ${textSize === 'md' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white font-bold shadow-xs' : 'text-stone-600 dark:text-stone-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setTextSize('lg')}
                title="Cỡ chữ lớn"
                className={`px-2 py-1 rounded font-serif ${textSize === 'lg' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white font-bold shadow-xs' : 'text-stone-600 dark:text-stone-400'}`}
              >
                A+
              </button>
            </div>

            {/* Audio Voice Reader Toggle Button */}
            <button
              onClick={onToggleAudio}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md border transition-all ${
                isPlayingAudio
                  ? 'bg-red-800 text-white border-red-900 animate-pulse'
                  : 'bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
              title={isPlayingAudio ? "Đang phát giọng đọc - Bấm để dừng" : "Đọc thành tiếng (Text-to-Speech)"}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden sm:inline">Đang đọc</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Nghe bài</span>
                </>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => {
                if (themeMode === 'paper') setThemeMode('dark');
                else if (themeMode === 'dark') setThemeMode('light');
                else setThemeMode('paper');
              }}
              className="p-1.5 text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-md hover:bg-stone-200"
              title="Chuyển chế độ màu sắc (Giấy báo / Tối / Sáng)"
            >
              {themeMode === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : themeMode === 'paper' ? (
                <BookOpen className="w-4 h-4 text-amber-800" />
              ) : (
                <Moon className="w-4 h-4 text-stone-700" />
              )}
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:p-1.5 text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-md hover:bg-stone-200"
              title="In hoặc lưu dạng PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex lg:hidden items-center justify-between gap-1 mt-2 pt-2 border-t border-stone-200 dark:border-stone-800 overflow-x-auto">
          <button
            onClick={() => setActiveTab('grid')}
            className={`px-3 py-1 text-xs font-medium rounded whitespace-nowrap ${
              activeTab === 'grid' ? 'bg-red-800 text-white' : 'text-stone-600 dark:text-stone-400'
            }`}
          >
            3 Box Ý Kiến
          </button>
          <button
            onClick={() => setActiveTab('spotlight')}
            className={`px-3 py-1 text-xs font-medium rounded whitespace-nowrap ${
              activeTab === 'spotlight' ? 'bg-red-800 text-white' : 'text-stone-600 dark:text-stone-400'
            }`}
          >
            Chuyên Sâu
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1 text-xs font-medium rounded whitespace-nowrap ${
              activeTab === 'matrix' ? 'bg-red-800 text-white' : 'text-stone-600 dark:text-stone-400'
            }`}
          >
            Ma Trận
          </button>
          <button
            onClick={() => setActiveTab('flow')}
            className={`px-3 py-1 text-xs font-medium rounded whitespace-nowrap ${
              activeTab === 'flow' ? 'bg-red-800 text-white' : 'text-stone-600 dark:text-stone-400'
            }`}
          >
            Sơ Đồ LÀM
          </button>
        </div>

      </div>
    </header>
  );
};
