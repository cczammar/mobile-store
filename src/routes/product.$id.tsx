import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import {
  BANKS,
  PRODUCTS,
  categoryTitle,
  formatPrice,
  waLink,
} from "@/lib/store-data";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.id);

    if (!product) {
      throw notFound();
    }

    return { product };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Товар не найден" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const { product } = loaderData;

    const title = `${product.brand} ${product.name} — Mobile Store Beslan`;

    return {
      meta: [
        { title },
        {
          name: "description",
          content: product.description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: product.description,
        },
      ],
    };
  },

  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();

  const [months, setMonths] = useState(12);

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, 4);

  const monthly = Math.round(product.price / months);

  return (
    <div className="mx-auto max-w-7xl px-6 pt-36 pb-24">
      <nav className="text-xs text-muted-foreground">
        <Link to="/catalog" className="hover:text-olive">
          Каталог
        </Link>

        <span className="px-2">/</span>

        <Link
          to="/catalog"
          search={{ category: product.category }}
          className="hover:text-olive"
        >
          {categoryTitle(product.category)}
        </Link>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div className="grid gap-4">
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            width={1008}
            height={1312}
            className="aspect-4/5 w-full rounded-[2rem] object-cover"
          />

          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <img
                key={i}
                src={product.image}
                alt=""
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover opacity-90"
                style={{
                  objectPosition: `${25 + i * 25}% center`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="lg:pt-6">
          <p className="eyebrow text-olive-light">
            {product.brand}
          </p>

          <h1 className="display-lg mt-3 text-ink">
            {product.name}
          </h1>

          <div className="mt-6 flex items-baseline gap-4">
            <span className="font-display text-3xl text-ink">
              {formatPrice(product.price)}
            </span>

            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={waLink(
                `Здравствуйте! Интересует ${product.brand} ${product.name}.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-background transition-transform duration-500 hover:-translate-y-0.5"
            >
              Заказать в WhatsApp
            </a>

            <a
              href={waLink(
                `Здравствуйте! Хочу рассрочку на ${product.brand} ${product.name}.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-transform duration-500 hover:-translate-y-0.5"
            >
              Купить в рассрочку
            </a>

            <Link
              to="/request"
              search={{
                product: `${product.brand} ${product.name}`,
              }}
              className="rounded-full border border-ink bg-background px-8 py-3.5 text-sm font-medium text-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-ink hover:text-background"
            >
              Оформить заявку
            </Link>
          </div>

          <div className="mt-10 rounded-3xl bg-secondary p-7">
            <p className="eyebrow text-olive-light">
              Рассрочка
            </p>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-3xl text-ink">
                {formatPrice(monthly)}
              </span>

              <span className="text-sm text-muted-foreground">
                в месяц · {months} мес.
              </span>
            </div>

            <div className="mt-5 flex gap-2">
              {[6, 12, 24, 36].map((m) => (
                <button
                  key={m}
                  onClick={() => setMonths(m)}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    m === months
                      ? "bg-ink text-background"
                      : "bg-background text-ink/70 hover:bg-rose"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              {BANKS.map((b) => b.name).join(" · ")}
            </p>
          </div>

          <dl className="mt-10 divide-y divide-border border-t border-border">
            {product.specs.map(
              (s: { label: string; value: string }) => (
                <div
                  key={s.label}
                  className="flex justify-between gap-6 py-4 text-sm"
                >
                  <dt className="text-muted-foreground">
                    {s.label}
                  </dt>

                  <dd className="text-ink">
                    {s.value}
                  </dd>
                </div>
              ),
            )}
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-28">
          <h2 className="display-lg text-ink">
            Похожее
          </h2>

          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}