import { useContext, useState } from "react";
import "./Write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import parse from "html-react-parser";
import { API_URL } from "../../assets/const";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const parse = require("html-react-parser");
  const url = API_URL;


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(url+"/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post(url + "/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt="writeImg"
        />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <span className="imgUpload">Image </span>
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          ></input>

          <input
            className="writeInput"
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          {/* <input
            className="writeInput"
            type="text"
            placeholder="Categories"
            autoFocus={true}
            onChange={(e) => setCategories(e.target.value)}
          ></input> */}
        </div>
        <div className="writeCat">
          <label for="categories">Choose a category:</label>

          <select
            name="categories"
            id="categories"
            onChange={(e) => setCategories(e.target.value)}
          >
            <option value=""></option>
            <option value="Новости">Новости</option>
            <option value="Проекты">Проекты</option>
            <option value="Мероприятия">Мероприятия</option>
            {/* <option value="Education">Education</option>
            <option value="Entrepreneurship">Entrepreneurship</option>
            <option value="Sports">Sports</option>
            <option value="Others">Others</option> */}
          </select>
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Your new post..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
