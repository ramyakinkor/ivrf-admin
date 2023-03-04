import React from "react";

export default function PhotoRow() {
  return (
    <tr>
      <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
        1
      </td>
      <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
        9244645
      </td>
      <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
        Apple in tree
      </td>
      <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
        Apple in tree
      </td>
      <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
        Apple,Tree
      </td>
      <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
        1920 X 1080
      </td>
      <td className=" p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
        <div className="flex justify-center">
          <Image height={70} />
        </div>
      </td>
      <td className="text-center p-3 border-[1px] w-28 border-slate-300 tracking-wide  whitespace-nowrap">
        <div className="flex justify-between items-center gap-2 h-full">
          <Link to="/edit-photo">
            <button className="flex gap-1 rounded-[3px] bg-blue-600 py-1 px-2 items-center ">
              <FIleIcon height={15} color="white" />
              <p className="text-white text-sm font-extralight">Edit</p>
            </button>
          </Link>
          <button className="flex gap-1 rounded-[3px] bg-orange-600 py-1 px-2 items-center ">
            <FIleIcon height={15} color="white" />
            <p className="text-white text-sm font-extralight">Delete</p>
          </button>
        </div>
      </td>
    </tr>
  );
}
