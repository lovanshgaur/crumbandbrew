"use client";

import { CATEGORIES, MENU } from "@/data/menu";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MenuItemCard from "@/components/MenuItemCard";
import FloatingCartBar from "@/components/FloatingCartBar";
import CartDrawer from "@/components/CartDrawer";
import ProfileDrawer from "@/components/ProfileDrawer";

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
        <Sidebar categories={CATEGORIES} />
        
        <div className="flex-1 space-y-24 pb-32">
          {CATEGORIES.map((cat) => {
            const items = MENU.filter((item) => item.cat === cat.id);
            if (!items.length) return null;

            return (
              <section id={cat.id} key={cat.id} className="scroll-mt-32">
                <div className="mb-6">
                  <h2 className="text-3xl font-medium tracking-tight">{cat.title}</h2>
                  {cat.desc && <p className="text-[var(--text-muted)] mt-1">{cat.desc}</p>}
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <FloatingCartBar />
      <CartDrawer />
      <ProfileDrawer />
    </div>
  );
}