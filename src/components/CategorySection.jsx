import MenuItemCard from "./MenuItemCard";

export default function CategorySection({ category, items, cart, updateCart }) {
  if (!items.length) return null;

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-medium">{category.title}</h2>
        <p className="text-neutral-500 text-sm mt-1">{category.desc}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            cart={cart}
            updateCart={updateCart}
          />
        ))}
      </div>
    </section>
  );
}
