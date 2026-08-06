import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/delivery")({
  component: DeliveryPage,
});

function DeliveryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="display-lg">Доставка</h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Мы доставляем технику по Беслану и Республике Северная Осетия — Алания.
        </p>

        <p>
          Возможен самовывоз из магазина Mobile Store Beslan.
        </p>

        <p>
          Для других городов отправляем заказы через транспортные компании.
          Условия доставки уточняйте у менеджера.
        </p>
      </div>
    </main>
  );
}
