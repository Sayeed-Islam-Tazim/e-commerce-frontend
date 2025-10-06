import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
