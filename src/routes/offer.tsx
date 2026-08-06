import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/offer")({
  component: OfferPage,
});

function OfferPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="display-lg">
        Публичная оферта
      </h1>

      <div className="mt-10 space-y-12 text-base leading-relaxed text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            1. Общие положения
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Настоящий документ является официальным предложением Mobile Store
              Beslan заключить договор купли-продажи товаров на условиях,
              указанных ниже.
            </p>

            <p>
              Оформляя заказ на сайте, покупатель подтверждает своё согласие с
              условиями настоящей публичной оферты.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. Информация о товаре
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Магазин предоставляет информацию о товарах, характеристиках,
              стоимости и условиях приобретения на сайте.
            </p>

            <p>
              Фотографии товаров могут отличаться от фактического внешнего вида
              в связи с особенностями отображения на различных устройствах.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            3. Оформление заказа
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Покупатель оформляет заказ через сайт или связывается с
              менеджером магазина для уточнения деталей покупки.
            </p>

            <p>
              После оформления заказа представитель магазина связывается с
              покупателем для подтверждения наличия товара и условий доставки.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            4. Стоимость и оплата
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Стоимость товара указывается на сайте и может изменяться до
              момента подтверждения заказа.
            </p>

            <p>
              Оплата осуществляется способами, указанными в разделе «Оплата»:
              наличными, банковской картой, по QR-коду или через оформление
              кредита / рассрочки через банк-партнёр.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            5. Доставка
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Условия доставки определяются в соответствии с выбранным способом
              получения товара.
            </p>

            <p>
              Подробная информация размещена в разделе «Доставка».
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            6. Гарантийные обязательства
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Гарантийное обслуживание товаров осуществляется в соответствии с
              условиями производителя или гарантийными обязательствами магазина.
            </p>

            <p>
              Подробная информация размещена в разделе «Гарантия».
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            7. Возврат и обмен товара
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Возврат и обмен товаров осуществляется в соответствии с
              законодательством Российской Федерации.
            </p>

            <p>
              Для решения вопросов по возврату или обмену необходимо обратиться
              в магазин по контактным данным, указанным ниже.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            8. Контактная информация
          </h2>

          <div className="mt-4 space-y-3">
            <p>
              Mobile Store Beslan
            </p>

            <p>
              Адрес: г. Беслан, ул. Ленина, 25
            </p>

            <p>
              Телефон: +7 961 822-47-07
            </p>

            <p>
              Email: mobilestore.beslan@internet.ru
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
