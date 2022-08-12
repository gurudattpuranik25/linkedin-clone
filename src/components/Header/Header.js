import React, { useContext } from "react";
import homeLogo from "../../images/home-logo.svg";
import avatar from "../../images/avatar.png";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import { auth } from "../../firebase-config";
import "./Header.css";

function Header() {
  const { signOutUser, isAuth, userName, userImage } = useContext(AuthContext);

  // console.log(isAuth);

  return (
    <div>
      {isAuth && (
        <nav className=" fixedNav">
          <div className=" w-[75%] flex items-center justify-between pt-3 p-2 m-auto">
            <div className=" flex gap-2">
              <Link to="/feed">
                <img src={homeLogo} className=" w-[44px] h-[44px] " alt="" />
              </Link>
              <div className=" flex items-center">
                <i className="fa-solid fa-magnifying-glass absolute pl-2 text-gray-500"></i>

                <input
                  type="text"
                  placeholder="Search"
                  className=" bg-sky-100 w-[18rem] h-[44px] pl-8 rounded-md "
                />
              </div>
            </div>
            <div className=" flex items-center gap-8">
              <Link to="/feed">
                <div className=" hovered flex flex-col items-center cursor-pointer">
                  <HomeIcon className=" text-gray-600  " />
                  <span className=" text-gray-500 text-xs">Home</span>
                </div>
              </Link>
              <Link to="/people">
                <div className="hovered flex flex-col items-center cursor-pointer ">
                  <PeopleIcon className=" text-gray-600  " />
                  <span className=" text-gray-500 text-xs">People</span>
                </div>
              </Link>
              <div className="hovered flex flex-col items-center cursor-pointer ">
                <BusinessCenterIcon className=" text-gray-600  " />
                <span className=" text-gray-500 text-xs">Jobs</span>
              </div>
              <div className="hovered flex flex-col items-center cursor-pointer ">
                <MessageIcon className=" text-gray-600  " />
                <span className=" text-gray-500 text-xs">Message</span>
              </div>
              <div className="hovered flex flex-col items-center cursor-pointer ">
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon color="action text-gray-600" />
                </Badge>
                <span className=" text-gray-500 text-xs">Notifications</span>
              </div>
              <Link to="/profile">
                <div className="hovered flex flex-col items-center cursor-pointer ">
                  <img
                    src={isAuth ? userImage : avatar}
                    className=" w-[1.7rem] h-[1.7rem] rounded-full"
                    alt=""
                  />
                  <span className=" text-gray-500 text-xs">
                    {" "}
                    {isAuth ? userName : "Me"}{" "}
                  </span>
                </div>
              </Link>
              {/* <div className="hovered flex flex-col items-center cursor-pointer ">
                <AppsIcon className=" text-gray-600 " />
                <span className=" text-gray-500 text-xs">Work </span>
              </div> */}
              <div className="hovered flex flex-col items-center cursor-pointer ">
                <span className=" text-amber-700 text-xs text-center">
                  Try Premium for <br /> free{" "}
                </span>
              </div>
              <button
                className=" bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-400 hover:text-white transition duration-200"
                onClick={signOutUser}
              >
                Log out
              </button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;
