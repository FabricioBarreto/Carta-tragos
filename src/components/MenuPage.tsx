"use client";

import { menu } from "@/data/menu";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Estilos por categoría según la imagen
  const getCategoryStyle = (id: string) => {
    const styles: Record<string, { titleClass: string; diamondClass: string }> =
      {
        cervezas: { titleClass: "category-pink", diamondClass: "diamond-pink" },
        tragos: {
          titleClass: "category-yellow",
          diamondClass: "diamond-yellow",
        },
        vinos: { titleClass: "category-pink", diamondClass: "diamond-pink" },
        gin: { titleClass: "category-cyan", diamondClass: "diamond-cyan" },
        espumantes: {
          titleClass: "category-yellow",
          diamondClass: "diamond-yellow",
        },
        vodka: { titleClass: "category-pink", diamondClass: "diamond-pink" },
        "sin-alcohol": {
          titleClass: "category-cyan",
          diamondClass: "diamond-cyan",
        },
        hielo: { titleClass: "category-cyan", diamondClass: "diamond-cyan" },
      };
    return styles[id] || styles.cervezas;
  };

  return (
    <>
      {/* Fondo espacial con estrellas */}
      <div className="space-background" />

      <div className="container">
        {/* Header principal */}
        <header className="main-header">
          <div className="header-content">
            <h1 className="title-retro">RETRO</h1>
            <h2 className="title-night">NIGHT FEST</h2>
            <div className="date-container">
              <span className="date-day">SÁBADO</span>
              <span className="date-number">07 FEB</span>
            </div>
          </div>
        </header>

        {/* Banner Lista de Precios */}
        <div className="price-list-banner">
          <h3 className="price-list-title">LISTA DE PRECIOS</h3>
        </div>

        {/* Menú */}
        <main>
          {menu.map((section) => {
            const style = getCategoryStyle(section.id);

            return (
              <section
                key={section.id}
                id={section.id}
                className="menu-section"
              >
                {/* Título de categoría con rombos */}
                <div className="category-header">
                  <div className={`diamond ${style.diamondClass}`} />
                  <h2 className={`category-title ${style.titleClass}`}>
                    {section.title.toUpperCase()}:
                  </h2>
                  <div className={`diamond ${style.diamondClass}`} />
                </div>

                {/* Items */}
                <div className="menu-items">
                  {section.items.map((item, index) => (
                    <div key={index} className="menu-item">
                      <div className="item-left">
                        <div className="item-name">{item.name}</div>
                        {item.note && (
                          <div className="item-note">{item.note}</div>
                        )}
                      </div>

                      <div className="dotted-separator" />

                      <div className="item-price">
                        $ {formatPrice(item.price)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          <footer className="footer">
            Retro Night Fest - Sábado 07 Feb 2026
          </footer>
        </main>

        {/* Botón scroll to top */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="scroll-top"
            aria-label="Volver arriba"
          >
            ↑
          </button>
        )}
      </div>
    </>
  );
}

function formatPrice(n: number) {
  return n.toLocaleString("es-AR");
}
