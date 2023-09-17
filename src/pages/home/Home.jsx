import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import axios from "axios";
import styles from "./Home.module.css";
import { API_URL } from "../../config/const";

const url = API_URL;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url + "/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="container">
      <Header />
      <div className={styles.home}>
        <Posts posts={posts} />
        <SideBar />
      </div>
    </div>
  );
}
