import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import storefront from "@/assets/storefront.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { CATEGORIES, PRODUCTS, STORE, waLink } from "@/lib/store-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mobile Store Beslan — премиальная техника в Беслане" },
      {
        name: "description",
        content:
          "Смартфоны, ноутбуки, часы, аудио и Dyson в бутике Mobile Store Beslan. Оригинал, гарантия, рассрочка и заказ в WhatsApp.",
      },
      {
        property: "og:title",
        content: "Mobile Store Beslan — премиальная техника",
      },
      {
        property: "og:description",
        content: "Салон электроники в Беслане. Оригинал, гарантия, рассрочка.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = PRODUCTS.slice(0, 8);

  return (
    <>
      <section className="px-4 pt-24 sm:px-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
          <img
            src={hero}
            alt="Премиальная техника на травертиновом постаменте"
            width={1808}
            height={1200}
            className="h-[78vh] min-h-[520px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/15 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 md:p-16">
            <p className="eyebrow rise-in text-background/70">
              Беслан · 20 лет с Вами
            </p>

            <h1 className="display-xl rise-in mt-4 max-w-3xl text-background">
              Техника, подобранная{" "}
              <em className="italic">со вкусом</em>
            </h1>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/catalog"
                className="rounded-full bg-background px-8 py-3.5 text-sm font-medium text-ink transition-transform duration-500 hover:-translate-y-0.5"
              >
                Смотреть каталог
              </Link>

              <a
                href={waLink("Здравствуйте! Хочу подобрать устройство.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-transform duration-500 hover:-translate-y-0.5"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="display-lg text-ink">
            Категории
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:justify-self-end">
            Смартфоны, ноутбуки, приставки, Dyson и другая техника —
            только оригинальная продукция с гарантией. Всё можно посмотреть,
            сравнить и протестировать в нашем магазине.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              to="/catalog"
              search={{ category: c.slug }}
              className={`lift group flex min-h-48 flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                i % 5 === 0
                  ? "bg-olive text-primary-foreground"
                  : i % 5 === 3
                  ? "bg-rose text-ink"
                  : "bg-secondary text-ink"
              }`}
            >
              <span className="eyebrow opacity-60">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="font-display text-3xl leading-tight">
                {c.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
            <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-lg text-ink">
            Избранное
          </h2>

          <Link
            to="/catalog"
            className="text-sm text-olive underline-offset-4 hover:underline"
          >
            Весь каталог
          </Link>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
            />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-secondary md:grid-cols-2">
          
          <div className="zoom-media order-2 md:order-1">
            <img
              src={storefront}
              alt="Фасад бутика Mobile Store Beslan"
              loading="lazy"
              width={1600}
              height={1104}
              className="h-full min-h-72 w-full object-cover"
            />
          </div>

          <div className="order-1 flex flex-col justify-center p-10 md:order-2 md:p-16">
            <p className="eyebrow text-olive-light">
              Салон
            </p>

            <h2 className="display-lg mt-5 text-ink">
              Приходите{" "}
              <em className="italic">
                посмотреть
              </em>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {STORE.address}. Приятная атмосфера,
              профессиональная консультация и возможность
              подержать устройство в руках до покупки.
            </p>

            <p className="mt-3 text-sm text-muted-foreground">
              {STORE.hours}
            </p>

            <Link
              to="/store"
              className="mt-9 w-fit rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-background transition-transform duration-500 hover:-translate-y-0.5"
            >
              Как нас найти
            </Link>
          </div>
        </div>
      </section>
          </>
  );
}
