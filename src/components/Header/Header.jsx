import { useState } from "react";
import useToggleResize from "../../hooks/useToggleResize";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MobileSidebar from "../Sidebar/MobileSidebar";
import Sidebar from "../Sidebar/Sidebar";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const dimensions = useWindowDimensions();
  useToggleResize(setToggle, dimensions);
  return (
    <>
      <div className="text-center sticky z-30 top-0 flex items-center justify-between md:justify-center px-2 text-xl bg-[#d9d9d9] py-6 ">
        IVRFootage ADMIN PANEL
        {!toggle && (
          <div
            onClick={handleToggle}
            className={"flex flex-col gap-[6px] cursor-pointer md:hidden"}
          >
            <div className="w-9 bg-black h-1"></div>
            <div className="w-9 bg-black h-1"></div>
            <div className="w-9 bg-black h-1"></div>
          </div>
        )}
      </div>
      {toggle && (
        <div className=" sidebar-mob ">
          <div className="slideIn w-[70%]">
            <MobileSidebar handleToggle={handleToggle} />
          </div>
          {/* <Sidebar /> */}

          <div
            onClick={handleToggle}
            className="absolute top-0 -z-10 h-full w-full opacity-60 bg-slate-500"
          ></div>
        </div>
      )}
    </>
  );
}
