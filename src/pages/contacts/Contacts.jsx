import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import styles from "./Contacts.module.css";
import BuiltMap from "../../openLayers/BuiltMap";


export default function Contacts() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapContainerRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div className="container">
      <div className={styles.about}>
        <h1>Русский культурный центр в городе Ашкелон</h1>
        <div className={styles.aboutDesc}>
          <p>
            КОНТАКТЫ<br />
            <br />
            Генеральный директор: Вероника&nbsp;Молотников<br />
            Тел.+972547487071<br /><br />
            Руководитель проекта: Марина&nbsp;Писаренко<br />
            Тел.+972533555828<br /><br />
            Мероприятия проводятся в Доме Ветеранов по адресу:<br />
            г.Ашкелон,ул.Кацнельсон 4.
          </p>
        </div>
        <BuiltMap />
      </div>
    </div>
  );
}
