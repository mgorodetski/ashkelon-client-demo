import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { useEffect, useState } from "react";
import "./TopBar.css";
export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://cult-center-api-d40078cd27ac.herokuapp.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i
          className="topIcon fab fa-facebook-square"
          style={{ color: "#3b5998" }}
        ></i>
        <i
          className="topIcon fab fa-twitter-square"
          style={{ color: "#00acee" }}
        ></i>
        <i
          className="topIcon fab fa-pinterest-square"
          style={{ color: "#E60023" }}
        ></i>
        <i
          className="topIcon fab fa-instagram-square"
          style={{ color: "#e95950" }}
        ></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Главная
            </Link>
          </li>
          <li className="topListItem">
          <Link to="/?cat=Новости">Новости</Link>
          </li>
          <li className="topListItem">
          <Link to="/?cat=Проекты">Проекты</Link>
          </li>
          <li className="topListItem">
          <Link to="/?cat=Мероприятия">Мероприятия</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              О нас
            </Link>
          </li>
          {/* <li className="topListItem">
            <Link className="link" style={{color:"#f0661e"}} to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li> */}
        </ul>
      </div>
      <div className="topRight">
        {/* {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt="profilePic"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )} */}
      </div>
    </div>
  );
}
