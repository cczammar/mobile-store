import { createFileRoute } from "@tanstack/react-router";
import storefront from "@/assets/storefront.jpg";
import { STORE, waLink } from "@/lib/store-data";
import YandexMap from "@/components/YandexMap";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      {
        title: "Mobile Store Beslan — смартфоны и техника в Беслане",
      },
      {
        name: "description",
        content:
          "Mobile Store Beslan — смартфоны, ноутбуки, приставки и аксессуары. Адрес магазина, часы работы и карта в центре Беслана.",
      },
      {
        property: "og:title",
        content: "Mobile Store Beslan — техника в Беслане",
      },
      {
        property: "og:description",
        content:
          "Смартфоны, ноутбуки, приставки и аксессуары. Приходите выбрать технику вживую.",
      },
    ],
  }),
  component: StorePage,
});

function StorePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-36 pb-24">
      <p className="eyebrow text-olive-light">
        Mobile Store Beslan
      </p>

      <h1 className="display-lg mt-4 max-w-3xl text-ink">
        Современная техника{" "}
        <em className="italic">в центре</em> Беслана
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Смартфоны, ноутбуки, игровые приставки и аксессуары.
        Поможем подобрать устройство и оформить удобную покупку.
      </p>

      <div className="zoom-media mt-14 rounded-[2rem]">
        <img
          src={storefront}
          alt="Магазин Mobile Store Beslan"
          loading="lazy"
          width={1600}
          height={1104}
          className="h-[52vh] min-h-80 w-full rounded-[2rem] object-cover"
        />
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-secondary p-10">
          <dl className="space-y-7 text-sm">
            <div>
              <dt className="eyebrow text-olive-light">
                Адрес
              </dt>
              <dd className="mt-2 font-display text-2xl text-ink">
                {STORE.address}
              </dd>
            </div>

            <div>
              <dt className="eyebrow text-olive-light">
                Часы работы
              </dt>
              <dd className="mt-2 text-ink">
                {STORE.hours}
              </dd>
            </div>

            <div>
              <dt className="eyebrow text-olive-light">
                Телефон
              </dt>
              <dd className="mt-2 text-ink">
                <a href={`tel:${STORE.phone}`}>
                  {STORE.phone}
                </a>
              </dd>
            </div>

            <div>
              <dt className="eyebrow text-olive-light">
                Почта
              </dt>
              <dd className="mt-2 text-ink">
                <a href={`mailto:${STORE.email}`}>
                  {STORE.email}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={waLink("Здравствуйте! Хочу приехать в магазин.")}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-background transition hover:-translate-y-0.5"
          >
            Написать в WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-ink p-3">
          <YandexMap />
        </div>
      </div>
    </div>
  );
}