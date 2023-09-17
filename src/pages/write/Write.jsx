import { useCallback, useContext, useMemo, useState } from "react";
import { API_URL } from "../../config/const";
import { Context } from "../../context/Context";
import styles from "./Write.module.css";
import classnames from "classnames";
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { mdeconfig } from "../../config/easyMDEconfig";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [files, setFiles] = useState([]);
  const { user } = useContext(Context);
  const url = API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("categories", categories);
    
    // Append each file to the 'photos' field
    files.forEach((file) => {
      formData.append("photos", file);
    });
  
    try {
      const response = await axios.post(url + "/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        const data = response.data;
        window.location.replace("/post/" + data._id);
      } else {
        console.log("Error:", response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const writeImgClass = classnames(styles.writeImg, {
    [styles.hidden]: files.length === 0,
  });

  const handleFileChange = useCallback((e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  }, []);

  const handleDeleteImage = useCallback((index) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  }, []);

  const onChange = useCallback((value) => {
    setDesc(value);
  }, []);

  const options = useMemo(
    () => (mdeconfig),
    []
  );

  return (
    <div className="container">
      <div className={styles.write}>
        {files.length > 0 && (
          <div className={styles.imagesWrapper}>
            {files.map((file, index) => (
              <div className={styles.imageItem} key={index}>
                <img
                  className={styles.writeImg}
                  src={URL.createObjectURL(file)}
                  alt="writeImg"
                />
                <div
                  className={styles.deleteIcon}
                  onClick={() => handleDeleteImage(index)}
                >
                  <i className="fas fa-times"></i>
                </div>
              </div>
            ))}
          </div>
        )}

        <form className={styles.writeForm} onSubmit={handleSubmit}>
          <div className={styles.writeFormGroup}>
            <span className={styles.imgUpload}>Image</span>
            <label htmlFor="fileInput">
              <i className={classnames(styles.writeIcon, "fas fa-plus")}></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
              multiple
              name="photos"
            />

            <input
              className={styles.writeInput}
              type="text"
              placeholder="Title"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.writeCat}>
            <label htmlFor="categories">Choose category:</label>

            <select
              name="categories"
              id="categories"
              onChange={(e) => setCategories(e.target.value)}
            >
              <option value=""></option>
              <option value="Новости">Новости</option>
              <option value="Проекты">Проекты</option>
              <option value="Мероприятия">Мероприятия</option>
            </select>
          </div>

          <SimpleMdeReact
            className={styles.editor}
            value={desc}
            onChange={onChange}
            options={options}
          />

          <button className={styles.writeSubmit} type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
