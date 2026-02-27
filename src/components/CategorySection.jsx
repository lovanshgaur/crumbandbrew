import MenuItemCard from "./MenuItemCard";

export default function CategorySection({ category, items, cart, updateCart }) {
  if (!items.length) return null;

  return (
    <section id={category.id} className="relative flex flex-col lg:flex-row gap-12 lg:gap-24 items-start scroll-mt-32">
      
      <div className="lg:sticky lg:top-32 lg:w-1/4 space-y-3 z-10">
        <h2 className="text-3xl font-medium tracking-tight">
          {category.title}
        </h2>
        {category.desc && (
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
            {category.desc}
          </p>
        )}
      </div>

      <div className="w-full lg:w-3/4 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} cart={cart} updateCart={updateCart} />
        ))}
      </div>
    </section>
  );
}