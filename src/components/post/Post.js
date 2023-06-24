import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://cult-center-api-d40078cd27ac.herokuapp.com/images/";

  return (
    <div className="post">
      {post.photo && (
        <Link to={`/post/${post._id}`} className="link">
          <img className="postImg" src={PF + post.photo} alt="postIMG" />
        </Link>
      )}
      <div className="postInfo">
        <div className="postTitle">
        <Link to={`/post/${post._id}`} className="link">
          <span >{post.title}</span>
        </Link>
        
        </div>
        <div className="postCategory">
        <Link to={`/?cat=${post.categories}`} className="link">
          <span >{post.categories}</span>
        </Link>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        </div>

      </div>
      <p
        className="postDesc"
        dangerouslySetInnerHTML={{ __html: post.desc }}
      ></p>
    </div>
  );
}
