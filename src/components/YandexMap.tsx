import { useEffect, useRef } from "react";
import { loadYandexMaps } from "@/lib/yandex";

type Props = {
  center?: [number, number];
  zoom?: number;
};

export default function YandexMap({
  center = [43.190868, 44.541005],
  zoom = 16,
}: Props) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: ymaps.Map | null = null;

    loadYandexMaps().then((ymaps) => {
      if (!mapRef.current) return;

      map = new ymaps.Map(mapRef.current, {
        center,
        zoom,
        controls: [
          "zoomControl",
          "fullscreenControl",
        ],
      });

      const placemark = new ymaps.Placemark(
        center,
        {
          balloonContent:
            "<b>Mobile Store Beslan</b><br/>Смартфоны и техника",
        },
        {
          preset: "islands#greenDotIcon",
        }
      );

      map.geoObjects.add(placemark);
      placemark.balloon.open();
    });

    return () => {
      map?.destroy();
    };
  }, []);

  return (
  <div
    ref={mapRef}
    className="h-[420px] w-full overflow-hidden rounded-[1.6rem]"
  />
);
}