"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const [cart, setCart] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("cb_cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const items = Object.values(cart);

  const total = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  function placeOrder(e) {
    e.preventDefault();

    localStorage.removeItem("cb_cart");

    router.push("/success");
  }

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

      <form onSubmit={placeOrder} className="mt-10 space-y-4">
        <input
          required
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          required
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-lg px-4 py-3"
        />

        <button className="w-full bg-black text-white rounded-full py-3 mt-4">
          Place Order
        </button>
      </form>
    </main>
  );
}