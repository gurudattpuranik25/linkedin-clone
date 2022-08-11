import React, { useContext, useEffect, useState } from "react";
// import avatar from "../../images/avatar.png";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Dialog from "@mui/material/Dialog";
import { v4 } from "uuid";
import { db, storage } from "../../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { AuthContext } from "../Context/Context";
// import { async } from "@firebase/util";

function Feed() {
  const { userName, userImage } = useContext(AuthContext);

  var [posts, setPosts] = useState([]);
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(null);
  const [image, setImage] = useState(null);
  const collectionRef = collection(db, "posts");

  const [formData, setFormData] = useState({
    body: "",
    videoUrl: "",
    imageUrl: "",
  });

  useEffect(() => {
    const uploadImage = () => {
      const storageRef = ref(storage, `${image.name + v4()}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setFormData((prev) => ({ ...prev, imageUrl: downloadURL }));
          });
        }
      );
    };

    image && uploadImage();

    const getPosts = async () => {
      const data = await getDocs(collectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [image]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addDoc(collectionRef, {
      body: formData.body,
      videoUrl: formData.videoUrl,
      imageUrl: formData.imageUrl,
      timestamp: serverTimestamp(),
    });
    alert("Post added successfully");
    setFormData({ body: "", videoUrl: "" });
    setOpen(false);
  };

  return (
    <div className=" overflow-hidden feed flex flex-col gap-2">
      <div
        className=" flex flex-col gap-2
       bg-white rounded-xl p-3 w-[35rem] border border-gray-300 shadow-lg "
      >
        <div className=" flex gap-2">
          <img
            src={userImage}
            className=" w-[48px] h-[48px] rounded-full "
            alt=""
          />
          <button
            className=" flex-1 text-left border border-gray-400 rounded-full pl-4 text-gray-500 hover:bg-gray-200"
            onClick={handleClickOpen}
          >
            Start a post
          </button>
          <Dialog open={open} onClose={handleClose}>
            <form action="" onSubmit={submitHandler}>
              <div className=" w-[32rem] flex flex-col gap-3 p-3 rounded-xl bg-white m-auto ">
                <div className=" flex gap-2 items-center">
                  <img
                    src={userImage}
                    className=" w-[40px] h-[40px] rounded-full "
                    alt=""
                  />
                  <span className=" text-black font-semibold">{userName}</span>
                </div>
                <textarea
                  rows="5"
                  className=" w-full resize-none placeholder:text-sm p-2 border-2 "
                  value={formData.body}
                  name="body"
                  onChange={handleChange}
                  placeholder="what do you want to talk about?"
                ></textarea>
                <input
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <input
                  type="text"
                  placeholder="Video URL"
                  value={formData.videoUrl}
                  name="videoUrl"
                  onChange={handleChange}
                  className=" border-2 p-2 text-sm"
                />
                <button
                  type="submit"
                  className=" bg-blue-500 p-2 text-md text-white font-semibold tracking-wider"
                  disabled={progress !== null && progress < 100}
                >
                  Post
                </button>
              </div>
            </form>
          </Dialog>
        </div>
        <div className=" flex justify-between px-6">
          <div className=" flex gap-3 items-center text-gray-500 cursor-pointer hover:bg-gray-100 px-2 py-2 hover:rounded-md">
            <PhotoSizeSelectActualIcon className=" text-blue-500" />
            <span className=" text-sm font-semibold">Photo</span>
          </div>
          <div className=" flex gap-3 items-center text-gray-500 cursor-pointer hover:bg-gray-100 px-2 py-2 hover:rounded-md">
            <SmartDisplayIcon className=" text-green-500" />
            <span className=" text-sm font-semibold">Video</span>
          </div>
          <div className=" flex gap-3 items-center text-gray-500 cursor-pointer hover:bg-gray-100 px-2 py-2 hover:rounded-md">
            <CalendarMonthIcon className=" text-amber-500" />
            <span className=" text-sm font-semibold">Event</span>
          </div>
          <div className=" flex gap-3 items-center text-gray-500 cursor-pointer hover:bg-gray-100 px-2 py-2 hover:rounded-md">
            <NoteAltIcon className=" text-red-500" />
            <span className=" text-sm font-semibold">Write article</span>
          </div>
        </div>
      </div>
      <div>
        {posts.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col gap-2 bg-white rounded-xl p-3 border border-gray-300 shadow-lg mb-2"
          >
            <div className=" flex gap-2 items-center">
              <img
                src={userImage}
                className=" w-[48px] h-[48px] rounded-full "
                alt=""
              />
              <span className=" text-black font-semibold text-sm">
                {userName}
              </span>
            </div>
            <hr />
            {item.body && <p>{item.body}</p>}
            {item.imageUrl && <img src={item.imageUrl} alt="" />}
            {item.videoUrl && (
              <iframe
                src={item.videoUrl}
                title={item.id}
                frameBorder="0"
                className=" w-full h-[20rem] "
              ></iframe>
            )}

            <hr />
            <div className=" flex gap-2">
              {like ? (
                <ThumbUpIcon
                  className=" cursor-pointer text-blue-600 hover:bg-gray-100 px-2 py-2 hover:rounded-md"
                  fontSize="large"
                  onClick={() => setLike(!like)}
                />
              ) : (
                <ThumbUpOutlinedIcon
                  className=" cursor-pointer text-gary-500 hover:bg-gray-100 px-2 py-2 hover:rounded-md"
                  fontSize="large"
                  onClick={() => setLike(!like)}
                />
              )}
              {heart ? (
                <FavoriteOutlinedIcon
                  className=" cursor-pointer text-red-500 hover:bg-gray-100 px-2 py-2 hover:rounded-md"
                  fontSize="large"
                  onClick={() => setHeart(!heart)}
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  className=" cursor-pointer text-gary-500 hover:bg-gray-100 px-2 py-2 hover:rounded-md"
                  fontSize="large"
                  onClick={() => setHeart(!heart)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Feed;
