import React, { useContext } from "react";
import Header from "../Header/Header";
import RightSidebar from "../RightSidebar/RightSidebar";
import profileBg from "../../images/image-background.jpg";
import avatar from "../../images/avatar.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";

function Profile() {
  const { userName, userImage } = useContext(AuthContext);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="  w-screen bg-gray-200">
        <div className=" w-[75%] py-5 h-screen m-auto flex gap-6">
          <div className=" flex-1 bg-white rounded-xl mt-16">
            <img
              src={profileBg}
              className="h-[10rem] w-full bg-white rounded-t-xl"
              alt=""
            />
            <img
              src={userImage}
              className=" relative -top-20 -right-14 w-[10rem] h-[10rem] rounded-full border border-gray-400 "
              alt=""
            />
            <h2 className=" pl-10 relative -top-16 font-semibold text-2xl">
              {userName}
            </h2>
            <Link
              to="/feed"
              className=" ml-10 relative -top-12 bg-rose-500 text-white px-3 py-1 rounded-xl"
            >
              Back
            </Link>
          </div>

          <div className=" mt-16">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
