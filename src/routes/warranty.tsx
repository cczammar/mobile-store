import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/warranty")({
  component: WarrantyPage,
});

function WarrantyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="display-lg">Гарантия</h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Все устройства проходят проверку перед продажей.
        </p>

        <p>
          На технику действует гарантия согласно условиям производителя.
        </p>

        <p>
          Мы поможем с обращением в сервисный центр и ответим на вопросы по
          эксплуатации устройства.
        </p>
      </div>
    </main>
      );
}
