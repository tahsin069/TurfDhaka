import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  onOpenQuickBook?: () => void;
}

export function Header({ onOpenQuickBook }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Title (Single text element, one line) */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
        >
          TurfDhaka
        </Link>

        {/* Zone 2: 4 Single-line Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <Link
            href="/#zone-explorer"
            className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Zone Explorer
          </Link>
          <Link
            href="/#all-turfs"
            className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            All 26 Turfs
          </Link>
          <Link
            href="/#quick-dial"
            className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Quick-Dial Matrix
          </Link>
          <Link
            href="/#match-guide"
            className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Match Guide
          </Link>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          {onOpenQuickBook ? (
            <button
              type="button"
              onClick={onOpenQuickBook}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0F5132] rounded-lg hover:bg-[#0B3D25] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book a Turf Slot
            </button>
          ) : (
            <Link
              href="/#zone-explorer"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0F5132] rounded-lg hover:bg-[#0B3D25] transition-colors whitespace-nowrap shrink-0"
            >
              Explore All 26 Turfs
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
