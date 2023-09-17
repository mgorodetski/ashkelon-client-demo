import axios from "axios";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router";
import { SimpleMdeReact } from "react-simplemde-editor";
import { API_URL } from "../../config/const";
import { Context } from "../../context/Context";
import styles from "./Singlepost.module.css";
import { mdeconfig } from "../../config/easyMDEconfig";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = `${API_URL}/images/`;
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);

  const url = API_URL;

  const onChange = useCallback((value) => {
    setDesc(value);
  }, []);

  const options = useMemo(() => mdeconfig, []);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`${url}/posts/${path}`);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        setCategories(res.data.categories);

        // Set all images (existing and new) when the post data is fetched
        if (res.data.photos) {
          setAllImages(res.data.photos.map((photo) => ({ id: photo, file: null })));
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, [path, url]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${url}/posts/${post._id}`, {
        data: { username: user?.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault(); // Prevent form submission
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("categories", categories);
      formData.append("username", user.username);

      // Append existing photos to the FormData
      allImages.forEach((image) => {
        if (image.id) {
          formData.append("photos", image.id);
        }
      });

      // Append new images to the FormData
      newImages.forEach((image) => {
        formData.append("photos", image);
      });

      const response = await axios.put(`${url}/posts/${post._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Update response:", response.data);

      setUpdateMode(false);
      window.location.reload(); // Refresh the page after updating
    } catch (err) {
      console.log("Update error:", err);
    }
  };

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const newImagesArray = [];

    for (let i = 0; i < files.length; i++) {
      newImagesArray.push(files[i]);
    }

    setNewImages(newImagesArray);
  };

  const handleImageDelete = (index) => {
    if (updateMode) {
      const updatedImages = [...allImages];
      updatedImages[index].id = null; // Mark the image for deletion
      setAllImages(updatedImages);
    } else {
      const deletedImageId = allImages[index].id;
      const updatedAllImages = allImages.filter((image, i) => i !== index);
      setAllImages(updatedAllImages);
      setDeletedImages((prevDeletedImages) => [...prevDeletedImages, deletedImageId]);
    }
  };

  return (
    <div className={styles.singlepost}>
      <div className={styles.singlepostwrapper}>
        {post.photos && post.photos.length > 0 && !updateMode && (
          <Carousel>
            {post.photos.map((photo, index) => (
              <div key={index}>
                <img
                  src={PF + photo}
                  alt=""
                  className={styles.singlepostimg}
                />
              </div>
            ))}
          </Carousel>
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className={styles.singleposttitleinput}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className={styles.singleposttitle}>
            {title}
            {post.username === user?.username && (
              <div className={styles.singlepostedit}>
                <i
                  className={`${styles.singleposticon} ${styles.spiupdate} far fa-edit`}
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className={`${styles.singleposticon} ${styles.spidelete} far fa-trash-alt`}
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className={styles.singlepostinfo}>
          <span className={styles.singlepostdate}>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <SimpleMdeReact
            className={styles.editor}
            value={desc}
            onChange={onChange}
            options={options}
          />
        ) : (
          <p
            className={styles.singlepostdesc}
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        )}
        {updateMode && (
          <div>
            <input
              type="file"
              multiple
              onChange={handleImageUpload}
              name="photos"
            />
            {allImages.map((image, index) => (
              <div key={index}>
                {image.file ? (
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt=""
                    className={styles.singlepostimg}
                  />
                ) : (
                  <img
                    src={PF + image.id}
                    alt=""
                    className={styles.singlepostimg}
                  />
                )}
                <button
                  className={styles.deleteImageButton}
                  onClick={() => handleImageDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        {updateMode && (
          <button className={styles.singlepostbutton} onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
