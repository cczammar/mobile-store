import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BANKS, formatPrice, waLink } from "@/lib/store-data";

export const Route = createFileRoute("/installment")({
  head: () => ({
    meta: [
      { title: "Рассрочка на технику — Mobile Store Beslan" },
      {
        name: "description",
        content:
          "Рассрочка 0-0-24 на технику в Беслане: Т-Банк, Сбер, Халва, Альфа-Банк. Калькулятор платежа и оформление за 10 минут.",
      },
      { property: "og:title", content: "Рассрочка на технику — Mobile Store Beslan" },
      { property: "og:description", content: "Калькулятор рассрочки и банки-партнёры." },
    ],
  }),
  component: Installment,
});

function Installment() {
  const [sum, setSum] = useState(90000);
  const [months, setMonths] = useState(12);

  return (
    <div className="mx-auto max-w-7xl px-6 pt-36 pb-24">
      <p className="eyebrow text-olive-light">Рассрочка</p>
      <h1 className="display-lg mt-4 max-w-2xl text-ink">
        Спокойные платежи <em className="italic">без переплат</em>
      </h1>

      <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-ink p-10 text-background md:p-14">
          <p className="eyebrow text-background/50">Калькулятор</p>
          <div className="mt-8">
            <label className="text-xs text-background/60">Сумма покупки</label>
            <p className="mt-2 font-display text-4xl">{formatPrice(sum)}</p>
            <input
              type="range"
              min={10000}
              max={300000}
              step={5000}
              value={sum}
              onChange={(e) => setSum(Number(e.target.value))}
              className="mt-4 w-full accent-rose"
            />
          </div>
          <div className="mt-10">
            <label className="text-xs text-background/60">Срок</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {[6, 12, 24, 36].map((m) => (
                <button
                  key={m}
                  onClick={() => setMonths(m)}
                  className={`rounded-full px-5 py-2 text-sm transition-colors ${
                    m === months ? "bg-accent text-accent-foreground" : "bg-background/10 text-background/80"
                  }`}
                >
                  {m} мес.
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12 border-t border-background/15 pt-8">
            <p className="text-xs text-background/60">Ежемесячный платёж</p>
            <p className="mt-2 font-display text-5xl">{formatPrice(Math.round(sum / months))}</p>
          </div>
          <a
            href={waLink(`Здравствуйте! Хочу рассрочку на ${formatPrice(sum)} на ${months} мес.`)}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground"
          >
            Оформить заявку
          </a>
        </div>

        <div className="grid gap-4">
          {BANKS.map((b) => (
            <div key={b.name} className="lift rounded-3xl bg-secondary p-8">
              <p className="font-display text-2xl text-ink">{b.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{b.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}