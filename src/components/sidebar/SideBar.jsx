import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ashLogo from "../../assets/ashqelonLogo.svg";
import { API_URL } from "../../config/const";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const url = API_URL;

  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(url + "/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>О ЦЕНТРЕ</span>
        <img className={styles.sidebarLogo} src={ashLogo} alt="logoImg" />
        <p>
        Мы приглашаем всех желающих на наши мероприятия,где их ждёт не только теплая и дружеская атмосфера,но и соприкосновение с миром искусства и литературы,а также множество удивительных открытий.
        </p>
      </div>
      {/* <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>МЫ В СОЦСЕТЯХ</span>
        <div className={styles.sidebarSocial}>
          <i className={`${styles.sidebarIcon} fab fa-facebook-square`} style={{ color: "#3b5998" }}></i>
          <i className={`${styles.sidebarIcon} fab fa-twitter-square`} style={{ color: "#00acee" }}></i>
          <i className={`${styles.sidebarIcon} fab fa-pinterest-square`} style={{ color: "#E60023" }}></i>
          <i className={`${styles.sidebarIcon} fab fa-instagram-square`} style={{ color: "#e95950" }}></i>
        </div>
      </div> */}
    </div>
  );
}
