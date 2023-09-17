import React from "react";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import { API_URL } from "../../config/const";

export default function Post({ post }) {
  const PF = `${API_URL}/images/`;

  let categoryText = "";
  if (post.categories === "projects") {
    categoryText = "проекты";
  } else if (post.categories === "news") {
    categoryText = "новости";
  } else if (post.categories === "events") {
    categoryText = "мероприятия";
  }

  return (
    <div className={styles.post}>
      {post.photos && post.photos.length > 0 && (
        <Link to={`/post/${post._id}`} className={styles.link}>
          <img
            className={styles.postImg}
            src={PF + post.photos[0]}
            alt="postIMG"
          />
        </Link>
      )}
      <div className={styles.postInfo}>
        <div className={styles.postTitle}>
          <Link to={`/post/${post._id}`} className={styles.link}>
            <span>{post.title}</span>
          </Link>
        </div>
        <div className={styles.postCategory}>
          <Link to={`/?cat=${post.categories}`} className={styles.link}>
            <span>{categoryText}</span>
          </Link>
          <span className={styles.postDate}>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
      </div>
      <p className={styles.postDesc}>{post.desc}</p>
    </div>
  );
}
