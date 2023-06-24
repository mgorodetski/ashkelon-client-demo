import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./Home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import axios from "axios";

const url ="https://cult-center-api-d40078cd27ac.herokuapp.com/api"


export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url+ "/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </div>
  );
}
