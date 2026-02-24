import Image from "next/image";

import { CATEGORIES, MENU } from "@/data/menu";

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
                                    <div
                                        key={item.id}
                                        className="border rounded-xl p-4 space-y-3"
                                    >
                                        <div className="aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden relative">
                                            <Image
                                                src="/placeholder.png"
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex justify-between items-start">
                                            <h3 className="font-medium leading-tight">
                                                {item.name}
                                            </h3>
                                            <span className="text-sm text-neutral-500">
                                                ₹{item.price}
                                            </span>
                                        </div>

                                        <p className="text-sm text-neutral-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}