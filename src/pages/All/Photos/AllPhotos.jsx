import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FIleIcon from "../../../components/Icons/File/FIleIcon";
import Image from "../../../components/Icons/Image/Image";
import Pagination from "../../../components/Pagination/Pagination";
import Searchbar from "../../../components/Searchbar/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../store/reducers/ProductSlice";

export default function AllPhotos() {

  const images = useSelector(state => state.product.images)
  const dispatch = useDispatch();

  function prepareList(image, index) {
    return (
      <tr>
          <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
            {index}
          </td>
          <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
            {image.id}
          </td>
          <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
            {image.title}
          </td>
          <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
            {image.description}
          </td>
          <td className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
            {image.tags}
          </td>
          
          <td className=" p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
            <div className="flex justify-center">
              <Image height={70} src={image.public}/>
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
              <button className="flex gap-1 rounded-[3px] bg-orange-600 py-1 px-2 items-center " onClick={() => dispatch(deleteProduct(image.id))}>
                <FIleIcon height={15} color="white" />
                <p className="text-white text-sm font-extralight">Delete</p>
              </button>
            </div>
          </td>
      </tr>
    )
  }
  
  return (
    <div className="px-10 pt-12 pb-5">
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <h1 className="text-2xl font-bold">ALL UPLOADED PHOTOS</h1>
        <Searchbar placeholder={"Search Photo..."} />
      </div>
      <div className="overflow-auto  mt-8 ">
        <table className="min-w-full ">
          <thead>
            <tr className="bg-[#c9daf8] ">
              <th className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
                Sl No
              </th>
              <th className="text-center p-3 border-[1px] border-slate-300 tracking-wide  whitespace-nowrap">
                ID
              </th>
              <th className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
                Title
              </th>
              <th className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
                Description
              </th>
              <th className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
                Tags
              </th>
              <th className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
                Thumbnail
              </th>
              <th className="text-center p-3 border-[1px] border-slate-300 tracking-wide whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {images?.length > 0 && images.map((image, index) => prepareList(image, index))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
}
