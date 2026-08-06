import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/delivery")({
  component: DeliveryPage,
});

function DeliveryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="display-lg">Доставка</h1>

      <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Доставка по России
          </h2>

          <div className="mt-4 space-y-3">
            <p>
              Отправка по России осуществляется курьерской службой СДЭК.
            </p>

            <p>
              Отправка возможна только по полной предоплате.
            </p>

            <p>
              Заказы, оплаченные до 15:00, отправляются в тот же день.
            </p>

            <p>
              Стоимость и срок доставки рассчитываются автоматически при
              оформлении заказа на сайте.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Доставка по Владикавказу и РСО-Алания
          </h2>

          <div className="mt-4 space-y-3">
            <p>
              Доставка курьером — стоимость рассчитывается после оформления
              заказа.
            </p>

            <p>
              Возможно оплата при получении — уточняйте у менеджеров.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
