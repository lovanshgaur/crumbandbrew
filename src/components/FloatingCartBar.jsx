"use client";

import { useAppContext } from "@/context/AppContext";

export default function FloatingCartBar() {
  const { cart, setIsCartOpen } = useAppContext();
  const items = Object.values(cart);
  const totalCount = items.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  if (totalCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 pointer-events-none animate-fade-in">
      <button
        onClick={() => setIsCartOpen(true)}
        className="pointer-events-auto flex items-center gap-4 p-2 pr-5 rounded-full shadow-2xl bg-[var(--accent)] text-[var(--accent-text)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(184,146,106,0.5)] active:scale-95"
      >
        <div className="w-10 h-10 rounded-full bg-[var(--bg-base)] text-[var(--text-primary)] flex items-center justify-center font-bold text-sm shadow-inner">
          {totalCount}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start pr-4 border-r border-white/20">
            <span className="text-[9px] uppercase tracking-widest opacity-80 font-medium">Tray</span>
            <span className="font-semibold text-sm leading-none mt-0.5">₹{totalPrice}</span>
          </div>
          
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
}