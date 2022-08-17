import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import peopleBg from "../../images/people-background.JPG";
import LeftSideBar from "../LeftSidebar/LeftSideBar";
import CircularProgress from "@mui/material/CircularProgress";

function Network() {
  const [userData, setUserData] = useState("");

  const url = "https://randomuser.me/api/?results=20";

  useEffect(() => {
    randomUserData();
  }, []);

  const randomUserData = () => {
    fetch(url)
      .then((res) => res.json())
      //   .then((data) => console.log(data.results));
      .then((data) => setUserData(data.results));
  };

  const [connect, setConnect] = useState([]);
  const onClickConnect = (item) => {
    let index = connect.findIndex((x) => x === item.login.uuid);
    if (index >= 0) connect.splice(index, 1);
    else connect.push(item.login.uuid);
    setConnect([...connect]);
  };

  return (
    <div>
      <div className=" z-20">
        <Header />
      </div>
      <div className=" w-[75%] py-5 h-screen m-auto flex gap-6">
        <div className=" mt-16">
          <LeftSideBar />
        </div>
        <div>
          <div className="my-16  grid grid-cols-4 gap-4 bg-white p-4 rounded-xl">
            {userData ? (
              userData.map((item) => (
                <div
                  key={item.login.uuid}
                  className=" bg-gray-100 rounded-lg flex flex-col gap-1 items-center"
                >
                  <img
                    src={peopleBg}
                    className=" opacity-90 rounded-t-lg"
                    alt=""
                  />
                  <img
                    src={item.picture.medium}
                    className=" rounded-full -mt-12 z-10 border-4 border-white"
                    alt=""
                  />
                  <p className=" font-semibold">
                    {item.name.first} {item.name.last}
                  </p>
                  <p className=" text-xs">
                    {item.location.city}, {item.location.country}
                  </p>
                  <button
                    className=" bg-white border-2 border-blue-500 hover:bg-sky-100 w-[80%] py-1 my-2 rounded-lg"
                    onClick={() => onClickConnect(item)}
                  >
                    {/* {isConnected ? "Connected" : "Connect"} */}
                    {connect.findIndex((x) => x === item.login.uuid) >= 0 ? (
                      <span className=" font-semibold">Connected</span>
                    ) : (
                      "Connect"
                    )}
                  </button>
                </div>
              ))
            ) : (
              <CircularProgress />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Network;
