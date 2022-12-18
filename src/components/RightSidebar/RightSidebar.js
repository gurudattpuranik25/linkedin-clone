import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import News from "./News";
import aramco from "../../images/aramco.jpg";
import { AuthContext } from "../Context/Context";

function RightSidebar() {
  const { userName, userImage } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className=" bg-white w-[20rem] p-3 rounded-xl border border-gray-300 shadow-lg mb-2">
        <div className=" flex justify-between">
          <h2 className=" text-sm font-semibold tracking-wide">
            LinkedIn News
          </h2>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <i className="fa-solid fa-info text-sm text-black"></i>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose} className=" text-xs]">
                These are the day’s top professional news <br /> stories and
                conversations. Learn more <br /> about how they’re selected.
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div>
          <News
            title="Robinhood cuts staff by 23%"
            desc="1d ago | 235 readers"
          />
          <News
            title="Experion plans to hire 3000"
            desc="21h ago | 23,512 readers"
          />
          <News title="Monkeypox: India updates" desc="2h ago | 512 readers" />
          <News title="Uber rides out of Zomato" desc="5m ago | 2 readers" />
          <News
            title="WFH attracts more women to work"
            desc="8s ago | 458 readers"
          />
        </div>
      </div>
      <div className="  flex flex-col items-center gap-4 w-[20rem] bg-white p-5 rounded-xl border border-gray-300 shadow-lg">
        <p className=" text-xs text-gray-400 text-center">
          Get the latest on jobs, news, and more
        </p>
        <div className=" flex gap-4">
          <img
            src={userImage}
            referrerPolicy="no-referrer"
            className=" w-[4.5rem] h-[4.5rem] rounded-full border border-gray-400 "
            alt=""
          />
          <img
            src={aramco}
            className=" w-[4.5rem] h-[4.5rem] border border-gray-400 "
            alt=""
          />
        </div>
        <p className=" text-gray-600">
          {userName}, <span className=" font-semibold">aramco</span> is hiring!
        </p>
        <button className=" text-blue-600 font-semibold px-4 py-1 border border-blue-600 rounded-full hover:bg-sky-100">
          Follow
        </button>
      </div>
    </div>
  );
}

export default RightSidebar;
