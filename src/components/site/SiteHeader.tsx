import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { STORE, waLink } from "@/lib/store-data";

const nav = [
  { to: "/", label: "Главная" },
  { to: "/catalog", label: "Каталог" },
  { to: "/installment", label: "Рассрочка" },
  { to: "/store", label: "О нас" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-5 py-3 transition-all duration-500 sm:px-7 ${
          scrolled
            ? "bg-background/85 shadow-soft backdrop-blur-xl"
            : "bg-background/40 backdrop-blur-md"
        }`}
      >
        <Link to="/" className="min-w-0 shrink-0">
          <span className="block font-display text-lg leading-none tracking-tight text-ink sm:text-xl">
            Mobile Store
          </span>
          <span className="eyebrow block text-[0.55rem] text-olive-light">Beslan</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-ink/70 transition-colors hover:text-olive"
              activeProps={{ className: "text-olive" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={waLink("Здравствуйте! Хочу задать вопрос о наличии товара.")}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-rose sm:inline-block"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            className="rounded-full border border-border p-2.5 text-ink md:hidden"
          >
            <span className="block h-px w-4 bg-current" />
            <span className="mt-1.5 block h-px w-4 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl bg-background/95 p-6 shadow-soft backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${STORE.phone}`} className="pt-2 text-sm text-muted-foreground">
              {STORE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
