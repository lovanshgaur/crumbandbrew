import { CATEGORIES } from "@/data/menu";

export default function MenuPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Menu</h1>

      <div className="space-y-10">
        {CATEGORIES.map((cat) => (
          <section key={cat.id}>
            <h2 className="text-2xl font-medium">{cat.title}</h2>
            <p className="text-neutral-500 text-sm mt-1">{cat.desc}</p>
          </section>
        ))}
      </div>
    </main>
  );
}