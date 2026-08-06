export const STORE = {
  name: "Mobile Store Beslan",
  phone: "+7 988 370 55 00",
  whatsapp: "79618224707",
  email: "mobilestore.beslan@internet.ru",
  instagram: "https://instagram.com/mobilestore.beslan",
  address: "г. Беслан, ул. Ленина, 25",
  hours: "Ежедневно 10:00 — 20:00",
};

export const waLink = (text: string) =>
  `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`;

export type Category = { slug: string; title: string };

export const CATEGORIES: Category[] = [
  { slug: "smartphones", title: "Смартфоны" },
  { slug: "laptops", title: "Ноутбуки" },
  { slug: "tablets", title: "Планшеты" },
  { slug: "watches", title: "Смарт-часы" },
  { slug: "headphones", title: "Наушники" },
  { slug: "gaming", title: "Гейминг" },
  { slug: "accessories", title: "Аксессуары" },
  { slug: "tv", title: "Телевизоры" },
  { slug: "smart-home", title: "Умный дом" },
  { slug: "cameras", title: "Камеры" },
  { slug: "dyson", title: "Dyson" },
  { slug: "other", title: "Другое" },
];

export type Badge = "Новинка" | "Скидка" | "Популярное" | null;

export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  badge: Badge;
  inStock: boolean;
  image: string;
  image2?: string;
  description: string;
  specs: { label: string; value: string }[];
};

const spec = (a: string, b: string) => ({ label: a, value: b });

export const PRODUCTS: Product[] = [
  {
    id: "iphone-17-pro",
    brand: "Apple",
    name: "iPhone 17 Pro 256 ГБ",
    price: 129900,
    category: "smartphones",
    badge: "Новинка",
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/phone.jpg",
    description:
      "Титановый корпус, матовая отделка и камера профессионального уровня. Флагман, собранный вокруг тишины и точности.",
    specs: [spec("Дисплей", '6.3" Super Retina XDR'), spec("Память", "256 ГБ"), spec("Чип", "A19 Pro"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "iphone-16",
    brand: "Apple",
    name: "iPhone 16 128 ГБ",
    price: 82900,
    oldPrice: 91900,
    category: "smartphones",
    badge: "Скидка",
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/phone.jpg",
    description: "Сбалансированный флагман прошлого поколения — та же выдержанная эстетика, более мягкая цена.",
    specs: [spec("Дисплей", '6.1" OLED'), spec("Память", "128 ГБ"), spec("Чип", "A18"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "galaxy-s25-ultra",
    brand: "Samsung",
    name: "Galaxy S25 Ultra 512 ГБ",
    price: 139900,
    category: "smartphones",
    badge: "Популярное",
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/phone.jpg",
    description: "Максимум оптики и стилус S Pen в корпусе из титана.",
    specs: [spec("Дисплей", '6.9" AMOLED 2X'), spec("Память", "512 ГБ"), spec("Камера", "200 Мп"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "macbook-air-m4",
    brand: "Apple",
    name: "MacBook Air 13 M4",
    price: 119900,
    category: "laptops",
    badge: "Новинка",
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/laptop.jpg",
    description: "Тонкий, бесшумный, целый день без розетки. Ноутбук, который не спорит с интерьером.",
    specs: [spec("Экран", '13.6" Liquid Retina'), spec("Память", "16 ГБ / 512 ГБ"), spec("Чип", "M4"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "macbook-pro-14",
    brand: "Apple",
    name: "MacBook Pro 14 M4 Pro",
    price: 219900,
    category: "laptops",
    badge: null,
    inStock: false,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/laptop.jpg",
    description: "Рабочая станция для монтажа и разработки в корпусе размером с блокнот.",
    specs: [spec("Экран", '14.2" XDR 120 Гц'), spec("Память", "24 ГБ / 1 ТБ"), spec("Чип", "M4 Pro"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "ipad-pro-11",
    brand: "Apple",
    name: "iPad Pro 11 M4",
    price: 104900,
    category: "tablets",
    badge: "Популярное",
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/laptop.jpg",
    description: "Тандем-OLED и толщина в 5.3 мм — планшет как лист стекла.",
    specs: [spec("Экран", '11" Tandem OLED'), spec("Память", "256 ГБ"), spec("Чип", "M4"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "apple-watch-u3",
    brand: "Apple",
    name: "Watch Ultra 3 Titanium",
    price: 94900,
    category: "watches",
    badge: "Новинка",
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/watch.jpg",
    description: "Титан, сапфир и автономность на несколько дней. Часы для города и для гор.",
    specs: [spec("Корпус", "49 мм титан"), spec("Экран", "3000 нит"), spec("Защита", "100 м"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "galaxy-watch-7",
    brand: "Samsung",
    name: "Galaxy Watch 7 44 мм",
    price: 32900,
    oldPrice: 38900,
    category: "watches",
    badge: "Скидка",
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/watch.jpg",
    description: "Спокойный дизайн и точные сенсоры здоровья.",
    specs: [spec("Корпус", "44 мм алюминий"), spec("Экран", "AMOLED"), spec("Автономность", "40 ч"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "airpods-max",
    brand: "Apple",
    name: "AirPods Max USB-C",
    price: 62900,
    category: "headphones",
    badge: "Популярное",
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/audio.jpg",
    description: "Алюминий, память формы и тишина одним касанием.",
    specs: [spec("Тип", "Накладные"), spec("Шумоподавление", "Активное"), spec("Автономность", "20 ч"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "sony-wh1000xm6",
    brand: "Sony",
    name: "WH-1000XM6",
    price: 44900,
    category: "headphones",
    badge: null,
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/audio.jpg",
    description: "Эталон шумоподавления в мягком корпусе песочного оттенка.",
    specs: [spec("Тип", "Накладные"), spec("Кодеки", "LDAC"), spec("Автономность", "30 ч"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "ps5-pro",
    brand: "Sony",
    name: "PlayStation 5 Pro",
    price: 109900,
    category: "gaming",
    badge: null,
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/laptop.jpg",
    description: "Консоль нового поколения с 8K-выводом и SSD на 2 ТБ.",
    specs: [spec("Накопитель", "2 ТБ SSD"), spec("Видео", "до 8K"), spec("Комплект", "DualSense"), spec("Гарантия", "12 месяцев")],
  },
  {
    id: "dyson-airwrap",
    brand: "Dyson",
    name: "Airwrap i.d. Complete",
    price: 59900,
    category: "dyson",
    badge: "Популярное",
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/audio.jpg",
    description: "Укладка без экстремального нагрева. Объект, который не хочется прятать в ящик.",
    specs: [spec("Насадки", "6 в комплекте"), spec("Режимы", "3 скорости"), spec("Кейс", "Дорожный"), spec("Гарантия", "24 месяца")],
  },
  {
    id: "lg-oled-65",
    brand: "LG",
    name: "OLED evo C4 65″",
    price: 179900,
    oldPrice: 199900,
    category: "tv",
    badge: "Скидка",
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/laptop.jpg",
    description: "Бесконечный контраст и рама толщиной в карандаш.",
    specs: [spec("Диагональ", "65″"), spec("Матрица", "OLED evo"), spec("Частота", "144 Гц"), spec("Гарантия", "24 месяца")],
  },
  {
    id: "magsafe-duo",
    brand: "Apple",
    name: "MagSafe Charger Duo",
    price: 12900,
    category: "accessories",
    badge: null,
    inStock: true,
    image: "https://pyemazjdueigboofbmdb.supabase.co/storage/v1/object/public/products/watch.jpg",
    description: "Две зарядки в одном сложенном жесте.",
    specs: [spec("Мощность", "15 Вт"), spec("Материал", "Алюминий"), spec("Кабель", "USB-C 1 м"), spec("Гарантия", "12 месяцев")],
  },
];

export const BRANDS = Array.from(new Set(PRODUCTS.map((p) => p.brand))).sort();

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(value) + " ₽";

export const categoryTitle = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug)?.title ?? "Другое";

export const BANKS = [
  { name: "Т-Банк", note: "0-0-24, без переплаты" },
  { name: "Сбер", note: "до 36 месяцев" },
  { name: "Халва", note: "рассрочка по карте" },
  { name: "Альфа-Банк", note: "решение за 2 минуты" },
];
