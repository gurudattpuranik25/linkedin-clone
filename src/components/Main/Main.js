import React from "react";
import Feed from "../Feed/Feed";
import Header from "../Header/Header";
import LeftSideBar from "../LeftSidebar/LeftSideBar";
import RightSidebar from "../RightSidebar/RightSidebar";

function Main() {
  return (
    <div>
      <div className="  ">
        <Header />
      </div>
      <div className="  w-screen bg-gray-200">
        <div className=" w-[75%] py-5 h-screen m-auto flex gap-6">
          <div className=" mt-16">
            <LeftSideBar />
          </div>
          <div className=" mt-16">
            <Feed />
          </div>
          <div className=" mt-16">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
