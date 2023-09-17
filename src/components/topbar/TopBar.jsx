import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./TopBar.module.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="container">
    <div className={styles.top}>
      {/* <div className={styles.topLeft}>
        <i className={`${styles.topIcon} fab fa-facebook-square`} style={{ color: "#3b5998" }}></i>
        <i className={`${styles.topIcon} fab fa-twitter-square`} style={{ color: "#00acee" }}></i>
        <i className={`${styles.topIcon} fab fa-pinterest-square`} style={{ color: "#E60023" }}></i>
        <i className={`${styles.topIcon} fab fa-instagram-square`} style={{ color: "#e95950" }}></i>
      </div> */}
      <div className={styles.topCenter}>
        <ul className={styles.topList}>
          <li className={styles.topListItem}>
            <Link className={styles.link} to="/">
              Главная
            </Link>
          </li>
          <li className={styles.topListItem}>
            <Link to="/?cat=news">Новости</Link>
          </li>
          <li className={styles.topListItem}>
            <Link to="/?cat=projects">Проекты</Link>
          </li>
          <li className={styles.topListItem}>
            <Link to="/?cat=events">Мероприятия</Link>
          </li>
          <li className={styles.topListItem}>
            <Link className={styles.link} to="/museum">
              Отзывы
            </Link>
          </li>
          <li className={styles.topListItem}>
            <Link className={styles.link} to="/about">
              О&nbsp;нас
            </Link>
          </li>
          <li className={styles.topListItem}>
            <Link className={styles.link} to="/contacts">
              Контакты
            </Link>
          </li>
          {/* <div className={styles.dropdown}>
            <span className={styles.topListItem}>
              CATEGORIES <i className="fa-solid fa-caret-down"></i>
            </span>
            <div className={styles.dropdownContent}>
              <Link to="/?cat=Technology">Проекты</Link>
              <Link to="/?cat=Music">Мастер-классы</Link>
              <Link to="/?cat=Life">Проекты</Link>
              <Link to="/?cat=Productivity">Мероприятия</Link>
              <Link to="/?cat=Education">Education</Link>
              <Link to="/?cat=Entrepreneurship">Entrepreneurship</Link>
              <Link to="/?cat=Sports">Sports</Link>
              <Link to="/?cat=Others">Others</Link>
            </div>
          </div> */}
     
          {/* <li className={styles.topListItem}>
            <Link className={styles.link} style={{ color: "#f0661e" }} to="/write">
              WRITE
            </Link>
          </li>
          <li className={styles.topListItem} onClick={handleLogout}>
            {user && "LOGOUT"}
          </li> */}
        </ul>
      </div>
      {/* <div className={styles.topRight}>
        {user ? (
          <Link to="/settings">
            <img className={styles.topImg} src={PF + user.profilePic} alt="profilePic" />
          </Link>
        ) : (
          <ul className={styles.topList}>
            <li className={styles.topListItem}>
              <Link className={styles.link} to="/login">
                LOGIN
              </Link>
            </li>
            <li className={styles.topListItem}>
              <Link className={styles.link} to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div> */}
    </div>
    </div>
  );
}
