import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/payment")({
  component: PaymentPage,
});

function PaymentPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="display-lg">Оплата</h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          В Mobile Store Beslan доступны удобные способы оплаты:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Наличными в магазине</li>
          <li>Банковской картой</li>
          <li>Оплата по QR-коду</li>
          <li>Рассрочка и кредит</li>
        </ul>
      </div>
    </main>
  );
}
