import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Searchbar from "../../components/Searchbar/Searchbar";

export default function User1() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
    let res = await fetch('/api/User/');
    res = res.json();
    if (res.legnth > 0)
    setUsers(res);
    } catch(err) {
      console.log(err);
    }
  }

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
                Created At
              </th>
            </tr>
          </thead>
          <tbody className="border-x-[2px] border-b-[2px] border-gray-200">
            {users?.map(user => {
              return (
                <tr>
                  <td className="border-r-2 py-3 px-5 text-left tracking-wide  whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="border-r-2 py-3 px-5 text-left tracking-wide whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="border-r-2 py-3 px-5 text-left tracking-wide whitespace-nowrap">
                    {user.created_at}
                  </td>
                </tr>
              )
            })}            
          </tbody>
        </table>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
