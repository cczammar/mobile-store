import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/personal-data")({
  component: PersonalDataPage,
});

function PersonalDataPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="display-lg">
        Согласие на обработку персональных данных
      </h1>

      <div className="mt-10 space-y-12 text-base leading-relaxed text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            1. Общие положения
          </h2>

          <p className="mt-4">
            Настоящим пользователь сайта Mobile Store Beslan даёт согласие на
            обработку своих персональных данных в соответствии с Федеральным
            законом №152-ФЗ «О персональных данных».
          </p>

          <p className="mt-4">
            Согласие предоставляется при оформлении заказа, отправке заявки или
            обращении в магазин через формы обратной связи.
          </p>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. Перечень персональных данных
          </h2>

          <p className="mt-4">
            Пользователь разрешает обрабатывать следующие персональные данные:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Имя и фамилия;</li>
            <li>Номер телефона;</li>
            <li>Адрес доставки;</li>
            <li>Адрес электронной почты;</li>
            <li>Информация о заказе и выбранном товаре;</li>
            <li>Данные, необходимые для оформления кредита или рассрочки.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            3. Цели обработки персональных данных
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Обработка и подтверждение заказов;</li>
            <li>Связь с покупателем по вопросам покупки;</li>
            <li>Организация доставки товаров;</li>
            <li>Оформление кредита или рассрочки через банк-партнёр;</li>
            <li>Предоставление информации о товарах и услугах магазина.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            4. Передача данных третьим лицам
          </h2>

          <p className="mt-4">
            Пользователь соглашается на передачу персональных данных третьим
            лицам в случаях, необходимых для выполнения заказа.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Курьерским службам и транспортным компаниям;</li>
            <li>Банкам при оформлении кредита или рассрочки;</li>
            <li>Авторизованным сервисным центрам при гарантийном обращении.</li>
          </ul>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            5. Срок действия согласия
          </h2>

          <p className="mt-4">
            Согласие действует до момента его отзыва пользователем либо до
            достижения целей обработки персональных данных.
          </p>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            6. Отзыв согласия
          </h2>

          <p className="mt-4">
            Пользователь вправе отозвать своё согласие на обработку персональных
            данных, направив соответствующий запрос в Mobile Store Beslan по
            контактным данным магазина.
          </p>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            7. Контактная информация
          </h2>

          <div className="mt-4 space-y-2">
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
