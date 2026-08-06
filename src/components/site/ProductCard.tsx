import { Link } from "@tanstack/react-router";
import { formatPrice, type Product, waLink } from "@/lib/store-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group block">

      <Link
        to="/product/$id"
        params={{ id: product.id }}
      >
        <div className="zoom-media lift relative overflow-hidden rounded-3xl bg-secondary">

          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            loading="lazy"
            width={1008}
            height={1312}
            className={`aspect-4/5 w-full rounded-3xl object-cover transition-opacity duration-300 ${
              product.image2 ? "group-hover:opacity-0" : ""
            }`}
          />

          {product.image2 && (
            <img
              src={product.image2}
              alt={`${product.brand} ${product.name}`}
              loading="lazy"
              width={1008}
              height={1312}
              className="absolute inset-0 aspect-4/5 w-full rounded-3xl object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">

            {product.badge && (
              <span
                className={`rounded-full px-3.5 py-1.5 text-[0.65rem] font-medium tracking-wide ${
                  product.badge === "Скидка"
                    ? "bg-accent text-accent-foreground"
                    : "bg-background/90 text-ink"
                }`}
              >
                {product.badge}
              </span>
            )}

            {product.inStock && (
              <span className="rounded-full bg-background/90 px-3.5 py-1.5 text-[0.65rem] font-medium tracking-wide text-ink">
                В наличии
              </span>
            )}

          </div>

        </div>


        <div className="mt-4 flex items-start justify-between gap-4">

          <div className="min-w-0">

            <p className="eyebrow text-olive-light">
              {product.brand}
            </p>

            <h3 className="mt-1 font-display text-xl leading-snug text-ink">
              {product.name}
            </h3>

            <p className="mt-2 text-xs text-muted-foreground">
              Можно оформить в кредит или рассрочку
            </p>

          </div>


          <div className="shrink-0 text-right">

            <p className="text-sm font-medium text-ink">
              {formatPrice(product.price)}
            </p>

            {product.oldPrice && (
              <p className="text-xs text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </p>
            )}

          </div>

        </div>
      </Link>


      <a
        href={waLink(`Здравствуйте! Интересует ${product.brand} ${product.name}`)}
        target="_blank"
        rel="noreferrer"
        className="mt-4 block rounded-full border border-ink/10 px-5 py-2.5 text-center text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-background"
      >
        Узнать цену в WhatsApp
      </a>

    </div>
  );
}
