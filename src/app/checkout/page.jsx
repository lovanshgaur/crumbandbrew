"use client";

import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, profile } = useAppContext();
  const items = Object.values(cart);
  
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const cgst = subtotal * 0.025;
  const sgst = subtotal * 0.025;
  const grandTotal = subtotal + cgst + sgst;

  const handleProcessOrder = (e) => {
    e.preventDefault();
    router.push("/success");
  };

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-16 animate-fade-in">
      <button 
        onClick={() => router.back()} 
        className="text-sm font-medium mb-10 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
      >
        ← Return to Menu
      </button>
      
      <h1 className="text-4xl lg:text-5xl font-medium mb-12 tracking-tight">Checkout</h1>
      
      <form onSubmit={handleProcessOrder} className="space-y-8">
        <section className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)]">
          <h2 className="text-xl font-medium border-b border-[var(--border)] pb-4 mb-6">Contact Details</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium">Name</p>
              <p className="font-medium text-lg">{profile.name || "Not provided"}</p>
            </div>
            <div>
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium">Phone</p>
              <p className="font-medium text-lg">{profile.phone || "Not provided"}</p>
            </div>
          </div>
        </section>

        <section className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)]">
          <h2 className="text-xl font-medium border-b border-[var(--border)] pb-4 mb-6">Order Summary</h2>
          
          <ul className="space-y-4 mb-6">
            {items.map(item => (
              <li key={item.id} className="flex justify-between text-base">
                <span className="text-[var(--text-muted)]">
                  <span className="font-medium text-[var(--text-primary)] mr-3">{item.qty}x</span> 
                  {item.name}
                </span>
                <span className="font-medium tabular-nums">₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3 pt-6 border-t border-[var(--border)] text-sm text-[var(--text-muted)]">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span className="text-[var(--text-primary)] font-medium tabular-nums">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>CGST (2.5%)</span>
              <span className="text-[var(--text-primary)] font-medium tabular-nums">₹{cgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>SGST (2.5%)</span>
              <span className="text-[var(--text-primary)] font-medium tabular-nums">₹{sgst.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between items-end text-xl font-medium border-t border-[var(--border)] pt-6 mt-6">
            <span className="font-serif text-2xl">Grand Total</span>
            <span className="tabular-nums">₹{grandTotal.toFixed(2)}</span>
          </div>
        </section>

        <button
          type="submit"
          disabled={!items.length}
          className="w-full bg-[var(--accent)] text-[var(--accent-text)] rounded-xl py-5 font-medium text-lg tracking-wide transition-all hover:shadow-[0_15px_30px_-10px_rgba(184,146,106,0.4)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:pointer-events-none mt-4"
        >
          Confirm & Pay ₹{grandTotal.toFixed(2)}
        </button>
      </form>
    </div>
  );
}