"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function SuccessPage() {
  const router = useRouter();
  const { updateCart } = useAppContext();

  useEffect(() => {
    updateCart(null, "clear");
  }, [updateCart]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center mb-8">
        <span className="text-4xl">✓</span>
      </div>
      <h1 className="text-5xl font-medium tracking-tight mb-4">Order Confirmed</h1>
      <p className="text-[var(--text-muted)] max-w-md mb-12 text-lg">
        Your order has been received and is being prepared. We will notify you when it is ready for pick-up.
      </p>
      <button
        onClick={() => router.push("/menu")}
        className="bg-[var(--accent)] text-[var(--accent-text)] px-8 py-4 rounded-xl font-medium"
      >
        Return to Menu
      </button>
    </div>
  );
}