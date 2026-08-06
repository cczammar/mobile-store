import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="display-lg">
        Политика конфиденциальности
      </h1>

      <div className="mt-10 space-y-12 text-base leading-relaxed text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            1. Общие положения
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Настоящая политика конфиденциальности регулирует порядок обработки
              и защиты персональных данных пользователей сайта Mobile Store
              Beslan.
            </p>

            <p>
              Используя сайт, оформляя заказ или отправляя заявку через формы
              обратной связи, пользователь подтверждает своё согласие на
              обработку персональных данных в соответствии с настоящей
              политикой и законодательством Российской Федерации.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. Какие данные мы собираем
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              При оформлении заказа или обращении в магазин могут обрабатываться
              следующие данные:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Имя и контактный номер телефона;</li>
              <li>Адрес доставки;</li>
              <li>Информация о выбранном товаре и заказе;</li>
              <li>Данные, необходимые для оформления кредита или рассрочки.</li>
            </ul>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            3. Цели обработки данных
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Персональные данные используются для:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>обработки заказов и заявок;</li>
              <li>связи с клиентом по вопросам покупки;</li>
              <li>организации доставки товара;</li>
              <li>оформления кредита или рассрочки через банк-партнёр;</li>
              <li>предоставления информации о товарах и услугах магазина.</li>
            </ul>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            4. Передача данных третьим лицам
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Mobile Store Beslan не продаёт и не передаёт персональные данные
              третьим лицам.
            </p>

            <p>
              Передача данных возможна только в случаях, необходимых для
              выполнения заказа: курьерским службам, транспортным компаниям,
              банкам при оформлении кредита или рассрочки, а также в случаях,
              предусмотренных законодательством РФ.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            5. Защита персональных данных
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Магазин принимает необходимые организационные и технические меры
              для защиты персональных данных пользователей от неправомерного
              доступа, изменения, раскрытия или уничтожения.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            6. Использование файлов Cookies
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Сайт может использовать файлы Cookies и инструменты аналитики для
              улучшения работы сайта, анализа посещаемости и повышения удобства
              пользователей.
            </p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold text-foreground">
            7. Согласие на обработку данных
          </h2>

          <div className="mt-4 space-y-4">
            <p>
              Отправляя заявку через сайт, пользователь подтверждает своё
              согласие на обработку предоставленных персональных данных в целях,
              указанных в настоящей политике конфиденциальности.
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
              Телефон: +7 961 822-47-07
            </p>

            <p>
              Email: mobilestore.beslan@internet.ru
            </p>

            <p>
              Адрес: г. Беслан, ул. Ленина, 25
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
