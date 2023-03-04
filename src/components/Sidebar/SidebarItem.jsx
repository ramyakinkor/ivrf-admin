import React from "react";

export default function SidebarItem({
  Icon,
  title,
  handleClick,
  clickedFor,
  tracks,
}) {
  return (
    <div
      onClick={() => handleClick(clickedFor)}
      className="border-t-2 border-black py-5 pl-7 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <Icon />
        <p
          className={`${
            tracks[clickedFor] ? "text-indigo-500" : "text-white"
          } text-md md:text-xl`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
