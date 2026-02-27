"use client";

export default function Sidebar({ categories }) {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden lg:block w-48 sticky top-32 h-fit shrink-0">
      <nav className="flex flex-col gap-1">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4 px-4">
          Menu
        </h3>
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            onClick={(e) => handleScroll(e, cat.id)}
            className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all"
          >
            {cat.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}