import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { CATEGORIES, categoryTitle } from "@/lib/store-data";
import { getProducts } from "@/lib/products";
import type { Product } from "@/lib/types";

type CatalogSearch = {
  category: string | undefined;
};

export const Route = createFileRoute("/catalog")({
  validateSearch: (search: Record<string, unknown>): CatalogSearch => ({
    category:
      typeof search["category"] === "string"
        ? (search["category"] as string)
        : undefined,
  }),

  head: () => ({
    meta: [
      {
        title: "Каталог техники — Mobile Store Beslan",
      },
      {
        name: "description",
        content:
          "Каталог оригинальной техники: смартфоны, ноутбуки, планшеты, часы, аудио, Dyson.",
      },
      {
        property: "og:title",
        content: "Каталог техники — Mobile Store Beslan",
      },
    ],
  }),

  component: Catalog,
});

const PER_PAGE = 8;

function Catalog() {
  const { category } = Route.useSearch();
  const navigate = Route.useNavigate();

  const [brand, setBrand] = useState("all");
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(250000);
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);


  const brands = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.brand))).sort(),
    [products]
  );


  const activeCategory = category ?? "all";


  const filtered = useMemo(() => {
    const list = products.filter(
      (p) =>
        (activeCategory === "all" ||
          p.category === activeCategory) &&
        (brand === "all" || p.brand === brand) &&
        p.price <= maxPrice &&
        `${p.brand} ${p.name}`
          .toLowerCase()
          .includes(query.trim().toLowerCase())
    );


    if (sort === "asc") {
      return [...list].sort(
        (a, b) => a.price - b.price
      );
    }


    if (sort === "desc") {
      return [...list].sort(
        (a, b) => b.price - a.price
      );
    }


    return list;

  }, [
    products,
    activeCategory,
    brand,
    maxPrice,
    query,
    sort,
  ]);


  const pages = Math.max(
    1,
    Math.ceil(filtered.length / PER_PAGE)
  );


  const current = Math.min(page, pages);


  const visible = filtered.slice(
    (current - 1) * PER_PAGE,
    current * PER_PAGE
  );


  const setCategory = (slug: string) => {
    setPage(1);

    navigate({
      search: {
        category:
          slug === "all"
            ? undefined
            : slug,
      },
    });
  };


  return (
    <div className="mx-auto max-w-7xl px-6 pt-36 pb-24">

      <p className="eyebrow text-olive-light">
        Каталог
      </p>


      <h1 className="display-lg mt-4 text-ink">
        {activeCategory === "all"
          ? "Всё собрание"
          : categoryTitle(activeCategory)}
      </h1>



      <div className="mt-10 flex flex-wrap gap-2">

        {[{ slug: "all", title: "Все" }, ...CATEGORIES]
          .map((c) => (

          <button
            key={c.slug}
            onClick={() => setCategory(c.slug)}
            className={`rounded-full px-5 py-2 text-sm transition-colors ${
              activeCategory === c.slug
                ? "bg-ink text-background"
                : "bg-secondary text-ink/70 hover:bg-rose"
            }`}
          >
            {c.title}
          </button>

        ))}

      </div>



      <div className="mt-8 grid gap-4 rounded-3xl bg-secondary p-6 md:grid-cols-4">


        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Поиск по названию"
          className="rounded-full bg-background px-5 py-3 text-sm"
        />


        <select
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            setPage(1);
          }}
          className="rounded-full bg-background px-5 py-3 text-sm"
        >

          <option value="all">
            Все бренды
          </option>

          {brands.map((b) => (
            <option
              key={b}
              value={b}
            >
              {b}
            </option>
          ))}

        </select>



        <label className="flex flex-col gap-2 text-xs">

          До{" "}
          {new Intl.NumberFormat("ru-RU")
            .format(maxPrice)} ₽


          <input
            type="range"
            min={10000}
            max={250000}
            step={5000}
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(
                Number(e.target.value)
              );
              setPage(1);
            }}
          />

        </label>



        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className="rounded-full bg-background px-5 py-3 text-sm"
        >

          <option value="popular">
            По умолчанию
          </option>

          <option value="asc">
            Цена ↑
          </option>

          <option value="desc">
            Цена ↓
          </option>

        </select>


      </div>




      {loading ? (

        <p className="mt-20 text-center">
          Загружаем каталог...
        </p>


      ) : visible.length === 0 ? (

        <p className="mt-20 text-center">
          Ничего не найдено.
        </p>


      ) : (

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

          {visible.map((p) => (

            <ProductCard
              key={p.id}
              product={p}
            />

          ))}

        </div>

      )}






      {pages > 1 && (

        <div className="mt-16 flex justify-center gap-2">

          {Array.from(
            { length: pages },
            (_, i) => i + 1
          ).map((n) => (

            <button
              key={n}
              onClick={() => setPage(n)}
              className={`h-10 w-10 rounded-full ${
                n === current
                  ? "bg-ink text-background"
                  : "bg-secondary"
              }`}
            >
              {n}
            </button>

          ))}

        </div>

      )}






      <div className="mt-24 rounded-3xl bg-olive p-10">

        <h2 className="display-lg text-primary-foreground">
          Не нашли модель?
        </h2>

        <p className="mt-4 text-sm">
          Привезём под заказ за 2–5 дней.
        </p>


        <Link
          to="/store"
          className="mt-8 inline-block rounded-full bg-background px-8 py-3.5 text-ink"
        >
          Связаться с салоном
        </Link>


      </div>


    </div>
  );
}