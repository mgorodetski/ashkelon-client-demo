import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlePost/Singlepost";

import styles from "./Single.module.css";

export default function Single() {
  return (
    <div className="container">

    <div className={styles.single}>
      <SinglePost />
      <SideBar />
    </div>
    </div>
  );
}
