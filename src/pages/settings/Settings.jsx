import SideBar from "../../components/sidebar/SideBar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import styles from "./Settings.module.css";
import { API_URL } from "../../config/const";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = `${API_URL}/images/`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="container">

    <div className={styles.settings}>
      <div className={styles.settingsWrapper}>
        <div className={styles.settingsTitle}>
          <span className={styles.settingsUpdateTitle}>Update account</span>
        </div>
        <form className={styles.settingsForm} onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className={styles.settingsPP}>
            <img
              className={styles.settingsPPImg}
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt="PPImg"
            />
            <label htmlFor="fileInput">
              <i className={styles.settingsPPIcon + " far fa-user"}></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.settingsSubmit} type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated successfully...
            </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
    </div>
  );
}
