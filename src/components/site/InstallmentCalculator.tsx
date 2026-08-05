import { useState } from "react";
import { formatPrice } from "@/lib/store-data";

export function InstallmentCalculator({
  price,
}: {
  price: number;
}) {
  const [months, setMonths] = useState(12);

  const monthly = Math.round(price / months);

  return (
    <div className="mt-10 rounded-3xl bg-secondary p-7">
      <div className="flex items-center justify-between">
        <p className="eyebrow text-olive-light">
          Рассрочка
        </p>

        <span className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground">
          0%
        </span>
      </div>

      <div className="mt-5">
        <span className="font-display text-3xl text-ink">
          {formatPrice(monthly)}
        </span>

        <span className="ml-2 text-sm text-muted-foreground">
          / месяц
        </span>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        Без переплаты · от {months} месяцев
      </p>

      <div className="mt-6 grid grid-cols-4 gap-2">
        {[6, 12, 24, 36].map((m) => (
          <button
            key={m}
            onClick={() => setMonths(m)}
            className={`
              rounded-full px-3 py-2 text-sm transition
              ${
                months === m
                  ? "bg-ink text-background"
                  : "bg-background text-ink/70 hover:text-ink"
              }
            `}
          >
            {m} мес.
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-background p-4">
        <p className="text-xs text-muted-foreground">
          Платеж в месяц
        </p>

        <p className="mt-1 text-lg font-medium text-ink">
          {formatPrice(monthly)}
        </p>
      </div>
    </div>
  );
}
