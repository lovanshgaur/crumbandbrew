import Image from "next/image";

export default function MenuItemCard({ item, cart, updateCart }) {
  const qty = cart[item.id]?.qty || 0;
  return (
    <div className="border rounded-xl p-4 space-y-3">
      <div className="aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden relative">
        <Image
          src="/placeholder.png"
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex justify-between items-start">
        <h3 className="font-medium leading-tight">{item.name}</h3>
        <span className="text-sm text-neutral-500">₹{item.price}</span>
      </div>

      <p className="text-sm text-neutral-500">{item.desc}</p>
      {qty === 0 ? (
        <button
          onClick={() => updateCart(item, "inc")}
          className="text-sm font-medium border rounded-full px-4 py-2"
        >
          Add to Tray
        </button>
      ) : (
        <div className="flex items-center gap-3">
          <button
            onClick={() => updateCart(item, "dec")}
            className="border rounded-full px-3 py-1"
          >
            −
          </button>

          <span className="text-sm font-medium">{qty}</span>

          <button
            onClick={() => updateCart(item, "inc")}
            className="border rounded-full px-3 py-1"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
