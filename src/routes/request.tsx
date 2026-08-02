import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/request")({
  component: RequestPage,
});

function RequestPage() {
  const search = Route.useSearch() as { product?: string };

  return (
    <div className="mx-auto max-w-4xl px-6 pt-36 pb-24">
      <div className="overflow-hidden rounded-[2.5rem] bg-ink p-8 sm:p-12">
        <div className="mb-10">
          <p className="text-sm font-medium text-background/60">
            Mobile Store Beslan
          </p>

          <h1 className="display-lg mt-3 text-background">
            Оформить заявку
          </h1>

          <p className="mt-4 max-w-xl text-background/70">
            Оставьте свои контакты — мы свяжемся с вами, поможем подобрать
            технику и расскажем про рассрочку или кредит.
          </p>
        </div>

        <form
          action="https://formsubmit.co/mobilestore.beslan@internet.ru"
          method="POST"
          className="space-y-5"
        >
          <input
            type="hidden"
            name="_subject"
            value="Новая заявка Mobile Store Beslan"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_next"
            value="https://mobilestorebeslan.ru/thanks"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-background/80">
                Имя
              </label>
              <input
                name="Имя"
                required
                placeholder="Ваше имя"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-background placeholder:text-background/40 outline-none transition focus:border-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-background/80">
                Телефон
              </label>
              <input
                name="Телефон"
                required
                placeholder="+7 (___) ___-__-__"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-background placeholder:text-background/40 outline-none transition focus:border-white/30"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-background/80">
              Email
            </label>
            <input
              type="email"
              name="Email"
              placeholder="example@mail.ru"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-background placeholder:text-background/40 outline-none transition focus:border-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-background/80">
              Какая техника интересует?
            </label>
            <input
              name="Товар"
              defaultValue={search.product ?? ""}
              placeholder="Например: iPhone 16 Pro"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-background placeholder:text-background/40 outline-none transition focus:border-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-background/80">
              Способ покупки
            </label>

            <select
              name="Способ покупки"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-background outline-none"
            >
              <option className="text-black">
                Покупка
              </option>
              <option className="text-black">
                Рассрочка
              </option>
              <option className="text-black">
                Кредит
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-background/80">
              Комментарий
            </label>

            <textarea
              name="Комментарий"
              rows={4}
              placeholder="Напишите, что вас интересует..."
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-background placeholder:text-background/40 outline-none transition focus:border-white/30"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-background px-8 py-4 font-medium text-ink transition hover:-translate-y-0.5"
          >
            Отправить заявку
          </button>

          <p className="text-center text-xs text-background/50">
            Нажимая кнопку, вы соглашаетесь на обработку заявки
          </p>
        </form>
      </div>
    </div>
  );
}