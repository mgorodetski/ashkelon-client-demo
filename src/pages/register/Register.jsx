import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Register.module.css";
import { API_URL } from "../../config/const";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const url = API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(url + "/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  };

  return (
    <div className="container">

      <div className={styles.register}>
        <span className={styles.registerTitle}>Register</span>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <label className={styles.registerLabel}>Username</label>
          <input
            className={styles.registerInput}
            type="text"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className={styles.registerLabel}>Email</label>
          <input
            className={styles.registerInput}
            type="text"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.registerLabel}>Password</label>
          <input
            className={styles.registerInput}
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.registerButton} type="submit">
            Register
          </button>
        </form>
        <button className={styles.registerLoginButton}>
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </button>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            <b>This account is already registered!</b>

          </span>
        )}
      </div>
    </div>
  );
}
