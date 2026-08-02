import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thanks")({
  component: ThanksPage,
});

function ThanksPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6 py-24">
      <div className="w-full rounded-[2.5rem] bg-secondary p-10 text-center sm:p-16">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-ink text-3xl text-background">
          ✓
        </div>

        <h1 className="display-lg mt-8 text-ink">
          Спасибо за заявку!
        </h1>

        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          Мы получили ваши данные и скоро свяжемся с вами.
          Поможем подобрать технику, оформить рассрочку или ответим на вопросы.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/catalog"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Вернуться в каталог
          </Link>

          <Link
            to="/"
            className="rounded-full border border-border bg-background px-8 py-3.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            На главную
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Mobile Store Beslan · Ленина 25
        </p>
      </div>
    </div>
  );
}