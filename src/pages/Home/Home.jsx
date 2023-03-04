import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full flex flex-col flex-grow h-screen overflow-y-scroll ">
        <Header />

        <Outlet />
      </div>
    </div>
  );
}
