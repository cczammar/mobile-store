import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/lib/store-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className="zoom-media lift relative rounded-3xl bg-secondary overflow-hidden">
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

        {product.badge && (
          <span
            className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[0.65rem] font-medium tracking-wide ${
              product.badge === "Скидка"
                ? "bg-accent text-accent-foreground"
                : "bg-background/90 text-ink"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="eyebrow text-olive-light">{product.brand}</p>
          <h3 className="mt-1 font-display text-xl leading-snug text-ink">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {product.inStock ? "В наличии" : "Под заказ"}
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
  );
}
