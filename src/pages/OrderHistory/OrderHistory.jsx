import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../../components/Icons/Pdf/Pdf";
import Pagination from "../../components/Pagination/Pagination";
import Searchbar from "../../components/Searchbar/Searchbar";

export default function OrderHistory() {
  return (
    <div className="px-10 pt-12 pb-5">
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <h1 className="text-2xl font-bold">Order History</h1>
        <Searchbar placeholder={"Search Order.."} />
      </div>
      <div className="overflow-auto  mt-8 rounded-md">
        <table className="min-w-full ">
          <thead>
            <tr className="bg-[#d9d9d9] ">
              <th className="text-left py-3 px-5 border-r-2 text-lg font-semibold tracking-wide whitespace-nowrap ">
                Customer Name
              </th>
              <th className="text-left py-3 px-5 border-r-2 text-lg font-semibold tracking-wide whitespace-nowrap">
                Plan Selected
              </th>
              <th className="text-left py-3 px-5 border-r-2 text-lg font-semibold tracking-wide whitespace-nowrap">
                Order Date - Order ID
              </th>
              <th className="text-left py-3 px-5  text-lg font-semibold tracking-wide whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="border-x-[2px] border-b-[2px] border-gray-200">
            <tr>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide  whitespace-nowrap">
                Rohit Sharma
              </td>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide whitespace-nowrap">
                Value - Photos ($8)
              </td>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide whitespace-nowrap">
                12/02/2023 - ODFX43544
              </td>
              <td className=" py-3 px-5 text-left tracking-wide whitespace-nowrap">
                <Link to={"/view-receipt"}>
                  <button className="bg-blue-700 gap-2 text-sm flex items-center px-2 py-2 rounded-[4px] text-white">
                    <Pdf height={18} width={18} />
                    View Receipt
                  </button>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide  whitespace-nowrap">
                Rohit Sharma
              </td>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide whitespace-nowrap">
                Value - Photos ($8)
              </td>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide whitespace-nowrap">
                12/02/2023 - ODFX43544
              </td>
              <td className=" py-3 px-5 text-left tracking-wide whitespace-nowrap">
                <Link to={"/view-receipt"}>
                  <button className="bg-blue-700 gap-2 text-sm flex items-center px-2 py-2 rounded-[4px] text-white">
                    <Pdf height={18} width={18} />
                    View Receipt
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
