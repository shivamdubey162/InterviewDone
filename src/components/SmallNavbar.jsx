import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


const SmallNavbar = ({ ShowManu, active }) => {
  return (
    <>
      {active ? (
        <nav
          className="w-auto md:w-full  md:hidden block bg-[#B3EAFF]/50 backdrop-blur-md
z-[-2]"
        >
          <div className="right-3 top-3 absolute md:hidden block">
            <FaTimes className="w-6 h-6" onClick={ShowManu} />
          </div>
          <div className="p-2 md:flex md:justify-between">
            <div className="md:flex md:items-center z-10">
              <ul>
              <Link to='/home'> <li className="m-2 text-xl pl-4 items-center ">Home</li></Link> 
              </ul>
            </div>
            <div className="z-10">
              <ul className="md:flex md:gap-10">
                <Link to="/home">
                  <li className="m-2 text-xl pl-4 items-center ">Blog</li>
                </Link>

                <Link to="/home">
                  {" "}
                  <li className="m-2 text-xl pl-4 items-center ">About us</li>
                </Link>

                <Link to="/home">
                  {" "}
                  <li className="m-2 text-xl pl-4 items-center ">Team</li>
                </Link>

                <Link to="/home">
                  {" "}
                  <li className="m-2 text-xl pl-4 items-center ">Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
    </>
  );
};

export default SmallNavbar;
