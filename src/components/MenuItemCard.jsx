import Image from "next/image";

export default function MenuItemCard({ item }) {
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
    </div>
  );
}