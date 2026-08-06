import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { InstallmentCalculator } from "@/components/site/InstallmentCalculator";
import {
  categoryTitle,
  formatPrice,
  waLink,
} from "@/lib/store-data";
import { getProducts } from "@/lib/products";

export const Route = createFileRoute("/product/$id")({
  loader: async ({ params }) => {
    const products = await getProducts();

    const product = products.find((p) => p.id === params.id);

    if (!product) {
      throw notFound();
    }

    return {
      product,
      products,
    };
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
  const { product, products } = Route.useLoaderData();

  const related = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id,
    )
    .slice(0, 4);

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

         <div className="mt-6 flex flex-wrap items-center gap-4">

  <span className="font-display text-3xl text-ink">
    {formatPrice(product.price)}
  </span>

  {product.oldPrice && (
    <span className="text-sm text-muted-foreground line-through">
      {formatPrice(product.oldPrice)}
    </span>
  )}

  <span
    className={`rounded-full px-4 py-1.5 text-xs font-medium ${
      product.inStock
        ? "bg-olive text-background"
        : "bg-secondary text-ink"
    }`}
  >
    {product.inStock ? "В наличии" : "Под заказ"}
  </span>

</div>

          <InstallmentCalculator price={product.price} />

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={waLink(
                `Здравствуйте! Интересует ${product.brand} ${product.name}.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-background"
            >
              Заказать в WhatsApp
            </a>

            <a
              href={waLink(
                `Здравствуйте! Хочу рассрочку на ${product.brand} ${product.name}.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground"
            >
              Купить в рассрочку
            </a>

            <Link
              to="/request"
              search={{
                product: `${product.brand} ${product.name}`,
              }}
              className="rounded-full border border-ink bg-background px-8 py-3.5 text-sm font-medium text-ink"
            >
              Оформить заявку
            </Link>
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
