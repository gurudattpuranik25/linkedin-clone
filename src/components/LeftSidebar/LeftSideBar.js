import React, { useContext } from "react";
import profileBg from "../../images/image-background.jpg";
import avatar from "../../images/avatar.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import { AuthContext } from "../Context/Context";

function LeftSideBar() {
  const { userName, userImage } = useContext(AuthContext);

  return (
    <div>
      <div className=" w-[14rem] border border-gray-300 shadow-lg bg-white rounded-xl mb-2">
        <img
          src={profileBg}
          className="h-[3.5rem] w-full bg-white rounded-t-xl"
          alt=""
        />
        <img
          src={userImage}
          referrerPolicy="no-referrer"
          className=" relative -top-8 -right-20 w-[4.5rem] h-[4.5rem] rounded-full border border-gray-400 "
          alt=""
        />
        <div className=" pb-3">
          <Link to="/profile">
            <p className=" -mt-4 font-semibold hover:underline cursor-pointer text-center">
              {userName}
            </p>
          </Link>
        </div>

        <hr />
        <div className=" py-3">
          <div className=" flex justify-between text-xs px-3 py-1 text-gray-400 font-semibold cursor-pointer hover:bg-gray-100">
            <p>Who's viewed your profile</p>
            <span className=" text-sky-600">20</span>
          </div>
          <div className=" flex justify-between text-xs px-3 py-1 text-gray-400 font-semibold cursor-pointer hover:bg-gray-100">
            <p>Impressions of your post</p>
            <span className=" text-sky-600">268</span>
          </div>
        </div>

        <hr />
        <div className=" hover:bg-gray-100 py-3 cursor-pointer">
          <p className=" text-xs mt-1 text-gray-400 px-3">
            Access exclusive tools & insights
          </p>
          <div className=" flex items-center gap-2 text-xs font-semibold px-3">
            <p className=" w-3 h-3 rounded-sm bg-gradient-to-tr from-yellow-600 to-yellow-400"></p>
            Try Premium from free
          </div>
        </div>

        <hr />
        <p className=" hover:bg-gray-100 hover:rounded-b-xl p-3 cursor-pointer">
          <i className="fa-solid fa-bookmark text-gray-500 pr-2"></i>{" "}
          {/* <BookmarkIcon fontSize="large" className="text-gray-500 pr-2 " /> */}
          <span className=" text-xs font-semibold ">My items</span>
        </p>
      </div>
      <div className="  w-[14rem] border border-gray-300 shadow-lg bg-white rounded-xl pt-2">
        <p className=" text-xs font-semibold text-sky-600 hover:underline cursor-pointer px-3 py-2">
          Groups
        </p>
        <p className=" text-xs font-semibold text-sky-600 hover:underline cursor-pointer px-3 py-2">
          Events
        </p>
        <p className=" text-xs font-semibold text-sky-600 hover:underline cursor-pointer px-3 py-2">
          Followed Hashtags
        </p>
        <hr />
        <p className=" cursor-pointer hover:bg-gray-100 hover:rounded-b-xl text-center text-sm text-gray-400 font-semibold p-3">
          Discover more
        </p>
      </div>
    </div>
  );
}

export default LeftSideBar;
