import React from "react";
import Post from "../post/Post";
import styles from "./Posts.module.css";

export default function Posts({ posts }) {
  return (
    <div className={styles.posts}>
      {posts.length === 0 ? (
        <h1>"Sorry, there are no stories yet for this category"</h1>
      ) : (
        posts.map((p, index) => (
          <React.Fragment key={index}>
            <Post post={p} />
          </React.Fragment>
        ))
      )}
    </div>
  );
}
