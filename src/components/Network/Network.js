import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import peopleBg from "../../images/people-background.JPG";
import LeftSideBar from "../LeftSidebar/LeftSideBar";

function Network() {
  const [userData, setUserData] = useState("");
  // const [connectList, setConnectList] = useState([]);
  // const [isConnected, setIsConnected] = useState(false);

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

  // const connectHandler = (userId) => {
  //   if (connectList.includes(userId)) {
  //     return;
  //   } else {
  //     setConnectList([...connectList, userId]);
  //     connectList.forEach(() => setIsConnected(true));
  //   }
  // };
  // console.log(connectList);

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
            {userData &&
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
                    // onClick={() => connectHandler(item.login.uuid)}
                  >
                    {/* {isConnected ? "Connected" : "Connect"} */}
                    Connect
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Network;
