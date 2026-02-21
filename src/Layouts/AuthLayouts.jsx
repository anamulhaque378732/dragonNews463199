import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";

const AuthLayouts = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-5">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayouts;
