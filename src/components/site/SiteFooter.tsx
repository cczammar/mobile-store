import { Link } from "@tanstack/react-router";
import storefront from "@/assets/storefront.jpg";
import { STORE, CATEGORIES, waLink } from "@/lib/store-data";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      <img
        src={storefront}
        alt="Фасад магазина Mobile Store Beslan"
        loading="lazy"
        width={1600}
        height={1104}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 text-background md:grid-cols-[1.2fr_1fr_1fr] md:py-28">
        <div>
          <p className="display-lg text-background">Mobile Store Beslan</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
            Салон техники в центре Беслана. Оригинальные устройства, гарантия и
            спокойный сервис без суеты.
          </p>
          <a
            href={waLink("Здравствуйте!")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground transition-transform duration-500 hover:-translate-y-0.5"
          >
            Написать в WhatsApp
          </a>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-background/50">Каталог</p>
          <ul className="mt-5 space-y-2.5">
            {CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/catalog"
                  search={{ category: c.slug }}
                  className="text-background/75 transition-colors hover:text-background"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-background/75">
          <p className="eyebrow text-background/50">Контакты</p>
          <ul className="mt-5 space-y-2.5">
            <li>{STORE.address}</li>
            <li>{STORE.hours}</li>
            <li>
              <a href={`tel:${STORE.phone}`} className="hover:text-background">
                {STORE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${STORE.email}`} className="hover:text-background">
                {STORE.email}
              </a>
            </li>
            <li>
              <a href={STORE.instagram} target="_blank" rel="noreferrer" className="hover:text-background">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-background/15">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-background/50">
          © {new Date().getFullYear()} Mobile Store Beslan
        </div>
      </div>
    </footer>
  );
}
