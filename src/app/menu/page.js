import { CATEGORIES, MENU } from "@/data/menu";
import CategorySection from "@/components/CategorySection";

export default function MenuPage() {
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
            />
          );
        })}
      </div>
    </main>
  );
}