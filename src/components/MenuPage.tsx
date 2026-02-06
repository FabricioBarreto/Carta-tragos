"use client";

import { menu } from "@/data/menu";
import { useEffect, useMemo, useState } from "react";

export default function MenuPage() {
  const [active, setActive] = useState(menu[0]?.id ?? "");
  const [showTop, setShowTop] = useState(false);
  const ids = useMemo(() => menu.map((s) => s.id), []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 160 && r.bottom >= 160) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return (
    <div className="container">
      {/* Header */}
      <header className="header-section">
        <h1 className="heading-font main-title">Retro Night Fest</h1>
        <p className="subtitle">Lista de Precios</p>
        <div className="date-badge">Sábado 07 Feb</div>
      </header>

      {/* Navegación sticky */}
      <nav className="sticky-nav">
        <div className="nav-pills">
          {menu.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-pill ${section.id === active ? "active" : ""}`}
            >
              {section.emoji} {section.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Contenido del menú */}
      <main>
        {menu.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="category-section scroll-mt-32"
          >
            <h2 className="heading-font category-title">
              <span className="category-emoji">{section.emoji}</span>
              {section.title}
            </h2>

            <div className="menu-items">
              {section.items.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="item-name-container">
                    <div className="item-name">{item.name}</div>
                    {item.note && <div className="item-note">{item.note}</div>}
                  </div>
                  <div className="heading-font item-price">
                    ${formatPrice(item.price)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <footer className="footer">Retro Night Fest - Sábado 07 Feb</footer>
      </main>

      {/* Botón scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-top-btn"
          aria-label="Volver arriba"
        >
          ↑
        </button>
      )}
    </div>
  );
}

function formatPrice(n: number) {
  return n.toLocaleString("es-AR");
}
