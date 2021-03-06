import React from "react";
import { Link, useNavigate, useParams,useSearchParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const login = useParams();
  
 

  const handleLogout = async (e) => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>

      {!user ? (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
