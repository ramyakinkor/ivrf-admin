import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IVRFLogo from "../../assets/logo/ivrf-logo.png";
import CategoryIcon from "../Icons/Category/CategoryIcon";
import ChevronUp from "../Icons/ChevronUp/ChevronUp";
import SidebarItem from "./SidebarItem";
import { convertCamelCase } from "../../utils/";
const initialState = {
  uploadPhoto: false,
  uploadVideo: false,
  orderHistory: false,
  allPhotos: false,
  allVideo: false,
  users: false,
  settings: false,
};
export default function Sidebar() {
  const pathName = convertCamelCase(location.pathname.split("/")[1]);
  console.log(pathName);
  //upload-video
  const [openUploads, setOpenUploads] = useState(false);
  const [tracks, setTracks] = useState(initialState);
  useEffect(() => {
   
    if (pathName == "" || pathName == "uploadVideo") {
      setOpenUploads(true);
      if (pathName == "") setTracks({ ...tracks, uploadPhoto: true });
      else
        setTracks({
          ...tracks,
          uploadVideo: true,
        });
    } else {
      setTracks({
        ...tracks,
        [pathName]: true,
      });
    }
  }, []);
  const handleSwitchRoutes = (clickedOn) => {
    if (clickedOn !== "uploadVideo" && clickedOn !== "uploadPhoto")
      setOpenUploads(false);
    const newState = { ...initialState, [clickedOn]: true };
    setTracks(newState);
  };
  const handleOpenUploads = () => {
    setOpenUploads(!openUploads);
  };
  return (
    <div className={`hidden md:w-[30em] bg-[#262626] h-screen md:block`}>
      <div className="  px-3 w-full flex justify-center border-black py-5">
        <div className="bg-slate-300 rounded-md">
          <img className="w-48 " src={IVRFLogo} />
        </div>
      </div>

      <div>
        <div
          onClick={handleOpenUploads}
          className="border-t-2 border-black flex items-center justify-between py-5 px-7 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <CategoryIcon />
            <p className={`text-white text-xl`}>NEW UPLOAD</p>
          </div>

          <ChevronUp />
        </div>
        <div
          className={`${
            openUploads ? "flex" : "hidden"
          } gap-2 flex-col  pl-14 pb-5`}
        >
          <Link to={"/"}>
            <p
              onClick={() => handleSwitchRoutes("uploadPhoto")}
              className={`${
                tracks.uploadPhoto ? "text-indigo-500" : "text-white"
              } text-xl `}
            >
              Photo
            </p>
          </Link>
          <Link to={"/upload-video"}>
            <p
              onClick={() => handleSwitchRoutes("uploadVideo")}
              className={`${
                tracks.uploadVideo ? "text-indigo-500" : "text-white"
              } text-xl `}
            >
              video
            </p>
          </Link>
        </div>
      </div>
      <Link to="/all-photos">
        <SidebarItem
          tracks={tracks}
          clickedFor={"allPhotos"}
          handleClick={handleSwitchRoutes}
          Icon={CategoryIcon}
          title="All Photos"
        />
      </Link>
      <Link to="/all-videos">
        <SidebarItem
          tracks={tracks}
          clickedFor={"allVideos"}
          handleClick={handleSwitchRoutes}
          Icon={CategoryIcon}
          title="All Videos"
        />
      </Link>
      <Link to="/category">
        <SidebarItem
          tracks={tracks}
          clickedFor={"catgeory"}
          handleClick={handleSwitchRoutes}
          Icon={CategoryIcon}
          title="Category"
        />
      </Link>
      {/* <Link to="/users">
        <SidebarItem
          tracks={tracks}
          clickedFor={"users"}
          handleClick={handleSwitchRoutes}
          Icon={CategoryIcon}
          title="Users"
        />
      </Link> */}
      <Link to="/settings">
        <SidebarItem
          tracks={tracks}
          clickedFor={"settings"}
          handleClick={handleSwitchRoutes}
          Icon={CategoryIcon}
          title="Settings"
        />
      </Link>
    </div>
  );
}
