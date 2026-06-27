import Image from "next/image";
export default function MenuItemCard({ item }) {
  return (
    <article className="group relative flex flex-col p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--text-primary)] transition-colors duration-300">
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
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
      </div>
    </article>
  );
}
