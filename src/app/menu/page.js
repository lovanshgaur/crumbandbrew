import Image from "next/image";

import { CATEGORIES, MENU } from "@/data/menu";
import MenuItemCard from "@/components/MenuItemCard";

export default function MenuPage() {
    return (
        <main className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
            <h1 className="text-3xl font-semibold mb-12">Menu</h1>

            <div className="space-y-16">
                {CATEGORIES.map((cat) => {
                    const items = MENU.filter((item) => item.cat === cat.id);

                    if (!items.length) return null;

                    return (
                        <section key={cat.id} className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-medium">{cat.title}</h2>
                                <p className="text-neutral-500 text-sm mt-1">{cat.desc}</p>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {items.map((item) => (
                                    <MenuItemCard key={item.id} item={item} />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}