"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("cb_cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const items = Object.values(cart);

  const total = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.name} × {item.qty}
            </span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
    </main>
  );
}