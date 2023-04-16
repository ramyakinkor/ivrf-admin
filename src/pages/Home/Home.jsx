import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login/Login";

export default function Home() {
  const profile = useSelector(state => state.admin.profile);
  return (
    <>
      { profile ? (
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="w-full flex flex-col flex-grow h-screen overflow-y-scroll ">
            <Header />

            <Outlet />
          </div>
        </div>
        ): <Login/>
      }
    </>
  );
}
