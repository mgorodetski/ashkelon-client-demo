import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Singlepost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const url ="http://localhost:5000/api"

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(url + "/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCategories(res.data.categories);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(url+ `/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(url+`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        categories,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlepostimg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singleposttitleinput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singleposttitle">
            {title}
            {post.username === user?.username && (
              <div className="singlepostedit">
                <i
                  className="singleposticon spiupdate far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singleposticon spidelete far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            <Link to={`/?user=${post.username}`} className="link">
              <h3> {post.username}</h3>
              <hr />
            </Link>
          </span>
          <span className="singlepostdate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <div>
            <textarea
              className="singlepostdescinput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        ) : (
          <p
            className="singlepostdesc"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        )}
        {updateMode && (
          <button className="singlepostbutton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
