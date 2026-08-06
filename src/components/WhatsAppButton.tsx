import { waLink } from "@/lib/store-data";

export function WhatsAppButton() {
  return (
    <a
      href={waLink("Здравствуйте! Хочу узнать о товарах")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-1"
    >
      <span className="text-xl">
        ☎
      </span>

      <span>
        WhatsApp
      </span>
    </a>
  );
}
