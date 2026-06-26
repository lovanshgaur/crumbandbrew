import Image from "next/image";
export default function MenuItemCard({ item }) {
  return (
    <div>
      <Image
      src={item.img}
      alt={item.name}
      fill
      />
      <div className="item-info">
        <h1>{item.name}</h1>
        <h3>{item.price}</h3>
        <p>{item.desc}</p>

      </div>
    </div>
  );
}
