import axios from "axios";
import { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import styles from "./Login.module.css";
import { API_URL } from "../../config/const";

const url = API_URL;

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(url + "/auth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", msg: "error" });
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className={styles.login}>
        <span className={styles.loginTitle}>Login</span>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            className={styles.loginInput}
            placeholder="Enter your username..."
            ref={userRef}
          />
          <label>Password</label>
          <input
            type="password"
            className={styles.loginInput}
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <button
            className={styles.loginButton}
            type="submit"
            disabled={isFetching}
          >
            Login
          </button>
        </form>
        <button className={styles.loginRegisterButton}>
          <Link className={styles.link} to="/register">
            Register
          </Link>
        </button>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            <b>Email OR Password Wrong!!</b>
          </span>
        )}
      </div>
    </div>
  );
}
