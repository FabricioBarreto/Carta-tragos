export type MenuSection = {
  id: string;
  title: string;
  emoji: string;
  items: { name: string; note?: string; price: number }[];
};

export const menu: MenuSection[] = [
  {
    id: "cervezas",
    title: "Cervezas",
    emoji: "🍺",
    items: [
      { name: "Vasos x 900 ml", price: 5000 },
      { name: "Latas 473 ml", price: 3000 },
      { name: "Corona 710 cc", price: 8000 },
      { name: "Corona 710 cc x2 (Combo)", price: 15000 },
    ],
  },
  {
    id: "tragos",
    title: "Tragos",
    emoji: "🍹",
    items: [
      { name: "Fernet", note: "(vaso)", price: 6000 },
      { name: "Gancias", note: "(vaso)", price: 5000 },
      { name: "Trago de MTM", note: "(vaso)", price: 5500 },
    ],
  },
  {
    id: "vinos",
    title: "Vinos",
    emoji: "🍷",
    items: [{ name: "Blanco / Rosado Dilema", price: 8000 }],
  },
  {
    id: "gin",
    title: "Gin (botella)",
    emoji: "🍸",
    items: [{ name: "Sky + 2 Speed o Agua Tónica", price: 30000 }],
  },
  {
    id: "espumantes",
    title: "Espumantes",
    emoji: "🍾",
    items: [
      { name: "Chandon Grande", price: 58000 },
      { name: "Chandon Chico", price: 16000 },
    ],
  },
  {
    id: "vodka",
    title: "Vodka",
    emoji: "🥃",
    items: [{ name: "Sernova + Cepita", price: 30000 }],
  },
  {
    id: "sin-alcohol",
    title: "Bebidas sin alcohol",
    emoji: "🥤",
    items: [
      { name: "Agua mineral 500cc", price: 2000 },
      { name: "Coca / Sprite (vasos x 900ml)", price: 5000 },
      { name: "Speed", price: 4000 },
      { name: "Monster", price: 6000 },
    ],
  },
  {
    id: "hielo",
    title: "Hielo (vaso)",
    emoji: "🧊",
    items: [{ name: "Hielo", price: 2000 }],
  },
];
