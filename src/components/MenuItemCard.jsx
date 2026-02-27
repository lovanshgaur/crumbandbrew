"use client";

import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function MenuItemCard({ item }) {
  const { cart, updateCart } = useAppContext();
  const qty = cart[item.id]?.qty || 0;

  return (
    <article className="group relative flex flex-col p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--text-primary)] transition-colors duration-300">
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[var(--bg-base)] mb-4">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex justify-between items-start gap-2 mb-1">
            <h3 className="text-lg font-medium">{item.name}</h3>
            <span className="font-semibold">₹{item.price}</span>
          </div>
          {item.desc && (
            <p className="text-sm text-[var(--text-muted)] line-clamp-2">
              {item.desc}
            </p>
          )}
        </div>

        <div className="relative z-10">
          {qty === 0 ? (
            <button
              onClick={() => updateCart(item, "inc")}
              className="w-full py-2.5 text-sm font-medium rounded-xl bg-[var(--bg-base)] border border-[var(--border)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-base)] transition-colors"
            >
              Add to Order
            </button>
          ) : (
            <div className="flex items-center justify-between bg-[var(--bg-base)] border border-[var(--border)] rounded-xl p-1">
              <button
                onClick={() => updateCart(item, "dec")}
                className="w-10 h-8 flex items-center justify-center rounded-lg hover:bg-[var(--bg-surface)]"
              >
                −
              </button>
              <span className="text-sm font-medium w-8 text-center">{qty}</span>
              <button
                onClick={() => updateCart(item, "inc")}
                className="w-10 h-8 flex items-center justify-center rounded-lg hover:bg-[var(--bg-surface)]"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}