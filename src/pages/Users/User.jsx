import { Link } from "react-router-dom";
import Pdf from "../../components/Icons/Pdf/Pdf";
import Pagination from "../../components/Pagination/Pagination";
import Searchbar from "../../components/Searchbar/Searchbar";

export default function User() {
  return (
    <div className="px-10 pt-12 pb-5">
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <h1 className="text-2xl font-bold">Order History</h1>
        <Searchbar placeholder={"Search Users.."} />
      </div>
      <div className="overflow-auto  mt-8 rounded-md">
        <table className="min-w-full ">
          <thead>
            <tr className="bg-[#d9d9d9] ">
              <th className="text-left py-3 px-5 border-r-2 text-lg font-semibold tracking-wide whitespace-nowrap ">
                Customer Name
              </th>
              <th className="text-left py-3 px-5 border-r-2 text-lg font-semibold tracking-wide whitespace-nowrap">
                Email ID
              </th>
              <th className="text-left py-3 px-5 border-r-2 text-lg font-semibold tracking-wide whitespace-nowrap">
                Active Plan
              </th>
            </tr>
          </thead>
          <tbody className="border-x-[2px] border-b-[2px] border-gray-200">
            <tr>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide  whitespace-nowrap">
                Rohit Sharma
              </td>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide whitespace-nowrap">
                rohit@gmail.com
              </td>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide whitespace-nowrap">
                NA
              </td>
            </tr>
            <tr>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide  whitespace-nowrap">
                Rohan Das
              </td>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide whitespace-nowrap">
                rohan@gmail.com
              </td>
              <td className="border-r-2 py-3 px-5 text-left tracking-wide whitespace-nowrap">
                Single Download $10
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
