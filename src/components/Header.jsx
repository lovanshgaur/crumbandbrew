"use client";

import { useAppContext } from "@/context/AppContext";

export default function Header() {
  const { setIsProfileOpen } = useAppContext();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[var(--bg-base)]/80 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight leading-none mb-1">
            Crumb & Brew
          </h1>
          <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Pick-up: C-Scheme, Jaipur
          </div>
        </div>

        <button
          onClick={() => setIsProfileOpen(true)}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] hover:bg-[var(--border)] transition-all"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
      </div>
    </header>
  );
}