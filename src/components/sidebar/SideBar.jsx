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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis vitae sem fermentum pharetra. Mauris
          sagittis lacus nec risus congue, quis malesuada tellus semper. In commodo turpis nec nulla consequat, vitae
          commodo nisl posuere. Donec accumsan augue ac justo facilisis, id volutpat dui volutpat. Cras faucibus elementum
          lacus, id tincidunt felis venenatis a. Fusce dignissim lorem ac mauris vestibulum, sit amet accumsan risus
          ullamcorper. Etiam accumsan ac lacus vel elementum. Quisque sed leo pellentesque, consectetur nisl non, gravida
          quam. Nulla viverra ligula a euismod aliquam.
        </p>
      </div>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>МЫ В СОЦСЕТЯХ</span>
        <div className={styles.sidebarSocial}>
          <i className={`${styles.sidebarIcon} fab fa-facebook-square`} style={{ color: "#3b5998" }}></i>
          <i className={`${styles.sidebarIcon} fab fa-twitter-square`} style={{ color: "#00acee" }}></i>
          <i className={`${styles.sidebarIcon} fab fa-pinterest-square`} style={{ color: "#E60023" }}></i>
          <i className={`${styles.sidebarIcon} fab fa-instagram-square`} style={{ color: "#e95950" }}></i>
        </div>
      </div>
    </div>
  );
}
