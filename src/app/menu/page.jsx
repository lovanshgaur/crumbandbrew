import { CATEGORIES, MENU } from "@/data/menu";

export default function Menu() {
  return (
    <>
      <div className="min-h-screen">
        <main className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
          {CATEGORIES.map((category) => {
            const items = MENU.filter((item) => item.cat === category.id);
            if (!items.length) return null;

            return (
              <section id={category.id} key={category.id}>
                <h2>{category.title}</h2>
                {category.desc && <p>{category.desc}</p>}
                <div>
                  {items.map((item) => {
                    return (
                      <div className="menu-item" key={item.id}>
                        <h4>{item.name}</h4>
                        <h4>{item.price}</h4>
                        <h6>{item.desc}</h6>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </>
  );
}
