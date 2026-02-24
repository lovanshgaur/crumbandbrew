"use client";
import { useState } from "react";
import { CATEGORIES, MENU } from "@/data/menu";
import CategorySection from "@/components/CategorySection";
import FloatingCartBar from "@/components/FloatingCartBar";
import CartDrawer from "@/components/CartDrawer";

export default function MenuPage() {
    const [cart, setCart] = useState({});
    const [isCartOpen, setIsCartOpen] = useState(false);
    function updateCart(item, type) {
        setCart((prev) => {
            const qty = prev[item.id]?.qty || 0;

            if (type === "inc") {
                return {
                    ...prev,
                    [item.id]: { ...item, qty: qty + 1 },
                };
            }

            if (type === "dec") {
                if (qty <= 1) {
                    const newCart = { ...prev };
                    delete newCart[item.id];
                    return newCart;
                }

                return {
                    ...prev,
                    [item.id]: { ...item, qty: qty - 1 },
                };
            }

            return prev;
        });
    }

    return (
        <main className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
            <h1 className="text-3xl font-semibold mb-12">Menu</h1>

            <div className="space-y-16">
                {CATEGORIES.map((cat) => {
                    const items = MENU.filter((item) => item.cat === cat.id);

                    return (
                        <CategorySection
                            key={cat.id}
                            category={cat}
                            items={items}
                            cart={cart}
                            updateCart={updateCart}
                        />
                    );
                })}
            </div>
            <FloatingCartBar
                cart={cart}
                onClick={() => setIsCartOpen(true)}
            />
            <CartDrawer
                cart={cart}
                updateCart={updateCart}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </main>
    );
}