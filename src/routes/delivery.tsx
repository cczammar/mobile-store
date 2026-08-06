import { createFileRoute } from "@tanstack/react-router";
import { waLink } from "@/lib/store-data";

export const Route = createFileRoute("/delivery")({
  component: DeliveryPage,
});

function DeliveryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="display-lg">
        Доставка
      </h1>

      <div className="mt-10 space-y-12 text-base leading-relaxed text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Доставка по России
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Отправляем заказы по всей России курьерской службой СДЭК.
              Надёжная доставка с возможностью отслеживания отправления.
            </p>

            <p>
              Отправка осуществляется после полной оплаты заказа.
            </p>

            <p>
              Заказы, оплаченные до 15:00, передаются в службу доставки в тот же
              день.
            </p>

            <p>
              Стоимость и сроки доставки рассчитываются автоматически при
              оформлении заказа на сайте и зависят от региона получения.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Доставка по Владикавказу и Республике Северная Осетия — Алания
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Доступна доставка курьером по городу Владикавказ и регионам РСО —
              Алания.
            </p>

            <p>
              Стоимость доставки рассчитывается индивидуально после оформления
              заказа.
            </p>

            <p>
              Возможна оплата при получении — пожалуйста, уточните условия у
              менеджера перед оформлением заказа.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Нужна помощь с доставкой?
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Если у вас остались вопросы по наличию товара, срокам доставки или
              способам оплаты — свяжитесь с нашими менеджерами в WhatsApp.
            </p>

            <a
              href={waLink("Здравствуйте! Хочу уточнить условия доставки")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground transition-transform duration-500 hover:-translate-y-0.5"
            >
              Написать менеджеру в WhatsApp
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
