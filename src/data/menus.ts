export type MenuCategory = "Kopi" | "Non-Kopi" | "Makanan";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuGroup {
  category: MenuCategory;
  items: MenuItem[];
}

export const menus: MenuGroup[] = [
  {
    category: "Kopi",
    items: [
      {
        name: "Kopi Susu Gula Aren",
        description: "Espresso dengan susu segar dan gula aren cair yang manis alami.",
        price: 28000,
      },
      {
        name: "Pour Over Single Origin",
        description: "Seduh manual biji Arabika pilihan, profil rasa bersih dan terang.",
        price: 35000,
      },
      {
        name: "Cafe Latte",
        description: "Espresso dan susu berbusa lembut, nyaman di pagi hari.",
        price: 32000,
      },
    ],
  },
  {
    category: "Non-Kopi",
    items: [
      {
        name: "Matcha Latte",
        description: "Matcha Jepang grade ceremonial dengan susu creamyy yang halus.",
        price: 33000,
      },
      {
        name: "Lemon Honey Tea",
        description: "Teh hitam dingin dengan madu dan perasan lemon segar.",
        price: 26000,
      },
      {
        name: "Cokelat Panas",
        description: "Cokelat batang leleh hangat, tanpa terlalu manis.",
        price: 30000,
      },
    ],
  },
  {
    category: "Makanan",
    items: [
      {
        name: "Butter Croissant",
        description: "Pastry berlapis renyah, mentega asin, hangat dari oven.",
        price: 22000,
      },
      {
        name: "Banana Bread",
        description: "Roti pisang moist dengan kayu manis, pas untuk teman kopi.",
        price: 24000,
      },
      {
        name: "Grilled Sandwich",
        description: "Roti panggang isi keju dan sayur, mengenyangkan untuk WFC.",
        price: 38000,
      },
    ],
  },
];

export const formatPrice = (value: number): string =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
