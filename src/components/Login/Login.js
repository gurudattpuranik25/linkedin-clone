import React, { useContext } from "react";
import Logo from "../../images/Logo.JPG";
import loginImage from "../../images/login-image.jpg";
import PeopleIcon from "@mui/icons-material/People";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ExploreIcon from "@mui/icons-material/Explore";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/Context";

function Login() {
  const { signInWithGoogle } = useContext(AuthContext);

  return (
    <div className=" w-[80%] m-auto ">
      <header className=" flex justify-between py-6 ">
        <img src={Logo} className=" w-38 h-10" alt="" />
        <div className=" flex gap-8 items-center">
          <div className=" flex flex-col items-center">
            <ExploreIcon className=" text-gray-600" />
            <span className=" text-gray-400">Discover</span>
          </div>
          <div className=" flex flex-col items-center">
            <PeopleIcon className=" text-gray-600" />
            <span className=" text-gray-400">People</span>
          </div>
          <div className=" flex flex-col items-center">
            <LocalLibraryIcon className=" text-gray-600" />
            <span className=" text-gray-400">Learning</span>
          </div>
          <div className=" flex flex-col items-center">
            <BusinessCenterIcon className=" text-gray-600" />
            <span className=" text-gray-400">Jobs</span>
          </div>
          <div className=" ml-4 flex items-center gap-8">
            <Link to="/" className=" font-semibold">
              Join now
            </Link>
            <button
              className=" border-2 text-blue-600 font-semibold border-blue-600 py-3 px-6 rounded-full hover:bg-sky-50"
              onClick={signInWithGoogle}
            >
              Sign in
            </button>
          </div>
        </div>
      </header>
      <div className=" flex justify-between py-8">
        <div className=" flex flex-col">
          <h1 className=" text-5xl tracking-wide font-thin leading-[3.5rem] pb-12 text-orange-800">
            Welcome to your <br /> professional community
          </h1>
          <p className=" w-[90%] flex justify-between text-xl border border-gray-300 rounded-xl p-4 mb-4 hover:shadow-xl ">
            <span> Search for a job </span>{" "}
            <i className="fa-solid fa-chevron-right text-gray-500"></i>
          </p>
          <p className=" w-[90%] flex justify-between text-xl border border-gray-300 rounded-xl p-4 mb-4 hover:shadow-xl ">
            <span> Find a person you know </span>{" "}
            <i className="fa-solid fa-chevron-right text-gray-500"></i>
          </p>
          <p className=" w-[90%] flex justify-between text-xl border border-gray-300 rounded-xl p-4 mb-4 hover:shadow-xl ">
            <span> Learn a new skill </span>{" "}
            <i className="fa-solid fa-chevron-right text-gray-500"></i>
          </p>
          <Link
            to="/"
            className=" flex gap-3 m-auto border border-gray-500 py-2 px-10 rounded-full items-center text-xl text-gray-500 hover:border-2 hover:bg-gray-100 hover:border-gray-800 transition duration-200 "
          >
            <FcGoogle />
            <span>Sign in with Google</span>
          </Link>
        </div>
        <img src={loginImage} className=" w-[50%] " alt="" />
      </div>
    </div>
  );
}

export default Login;
