import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/payment")({
  component: PaymentPage,
});

function PaymentPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="display-lg">Оплата</h1>

      <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Способы оплаты
          </h2>

          <ul className="mt-4 list-disc space-y-3 pl-6">
            <li>
              Наличными в магазине — по цене со скидкой.
            </li>

            <li>
              Банковской картой или по QR-коду — применяется основная цена.
            </li>

            <li>
              Покупка в кредит / рассрочку — оформляется через банк-партнёр.
              Расчёт платежа является предварительным. Оформляется по основной
              цене.
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
