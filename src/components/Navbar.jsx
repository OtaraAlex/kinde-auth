import React from "react";
import { Link } from "react-router-dom";
import Register from "../pages/Register";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoggedIn from "./LoggedIn";

const Navbar = () => {
  const { isAuthenticated } = useKindeAuth();
  return (
    <header className="border-b">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between">
        <Link href="/" className="w-36">
          <h1 className="text-2xl font-bold">KindeAuth</h1>
        </Link>
        <div className="flex w-32 justify-end gap-3">
          {isAuthenticated ? <LoggedIn /> : <Register />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
