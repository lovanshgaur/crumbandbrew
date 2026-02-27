"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function CartDrawer() {
  const { cart, updateCart, isCartOpen, setIsCartOpen } = useAppContext();
  const router = useRouter();
  const items = Object.values(cart);
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  if (!isCartOpen) return null;

  return (
    <>
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
      />
      
      <aside className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-[var(--bg-base)] z-50 flex flex-col shadow-2xl">
        <div className="p-6 flex items-center justify-between border-b border-[var(--border)]">
          <h2 className="text-2xl font-medium">Your Tray</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-sm">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-center text-[var(--text-muted)] mt-10">Your tray is empty.</p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[var(--bg-surface)]">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <p className="font-medium">{item.name}</p>
                      <p className="font-medium">₹{item.price * item.qty}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateCart(item, "dec")} className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center">−</button>
                      <span className="text-sm">{item.qty}</span>
                      <button onClick={() => updateCart(item, "inc")} className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center">+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-6 border-t border-[var(--border)] bg-[var(--bg-surface)]">
          <div className="flex justify-between text-lg mb-6">
            <span className="font-medium">Total</span>
            <span className="font-semibold">₹{total}</span>
          </div>
          <button
            onClick={() => {
              setIsCartOpen(false);
              router.push("/checkout");
            }}
            disabled={!items.length}
            className="w-full bg-[var(--accent)] text-[var(--accent-text)] rounded-xl py-4 font-medium disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}