import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    
    <div className={styles.header}>
      <div className={styles.headerTitles}>
        <span className={styles.headerTitleLg}>
          Амута&nbsp;"Аврора"&nbsp;г.&nbsp;Ашкелон
          </span>
        <span className={styles.headerTitleSm}>
          "Русский культурный центр г. Ашкелон"
        </span>
        <img
          className={styles.headerImg}
          src="https://live.staticflickr.com/3047/2935905040_800b33926a_b.jpg"
          alt="headerImg"
        />
      </div>
    
    </div>
  );
}
