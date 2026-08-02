let promise: Promise<typeof ymaps> | null = null;

export function loadYandexMaps() {
  if (typeof window === "undefined") {
    return Promise.reject("Yandex Maps available only in browser");
  }

  if (window.ymaps) {
    return Promise.resolve(window.ymaps);
  }

  if (promise) {
    return promise;
  }

  promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");

    script.src =
      `https://api-maps.yandex.ru/2.1/?apikey=${import.meta.env.VITE_YANDEX_API_KEY}&lang=ru_RU`;

    script.async = true;

    script.onload = () => {
      window.ymaps.ready(() => {
        resolve(window.ymaps);
      });
    };

    script.onerror = reject;

    document.head.appendChild(script);
  });

  return promise;
}