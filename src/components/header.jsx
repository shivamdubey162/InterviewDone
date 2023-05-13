import React, { useState } from "react";
import { FaLinkedin, FaFacebookF, FaTumblr, FaBars } from "react-icons/fa";
import TopLEft from "../assets/png2.png";
import BottomRight from "../assets/png.png";
import BottomRightBody from "../assets/png3.png";
import TopLeftBody from "../assets/png4.png";
import TeameWork from '../assets/Team work fv.png'
import SmapllNavbar from "../components/SmallNavbar";

const Header = () => {
  const [active, setActive] = useState(false);
  const ShowManu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="w-auto m:w-full md:h-screen h-auto flex justify-center my-auto ">
        <img
          src={TopLeftBody}
          alt=""
          className="absolute left-0 top-0 z-[-2] w-[30%]"
        />
        <img
          src={BottomRightBody}
          alt=""
          className="absolute z-[-3] bottom-0 right-0 w-[40%]"
        />
        <div className="md:w-[90%] md:h-[90%] h-[100%] w-[100%] mx-auto bg-white my-auto relative shadow-[0_80px_70px_20px_rgba(0,0,0,0.3)]">
          <img src={TopLEft} alt="" className="absolute z-[1] w-[25%]" />
          <img
            src={BottomRight}
            alt=""
            className="absolute z-[1] bottom-0 right-0 w-[60%]"
          />
          <div className="right-3 top-3 absolute md:hidden block">
            <FaBars
              className={active ? "hidden" : "h-5 w-5"}
              onClick={ShowManu}
            />
          </div>

          <nav className="md:w-full md:h-[10%] z-[-2] ">
            <div className="p-2 md:flex md:justify-between md:block hidden ">
              <div className="flex items-center z-10">
                <ul>
                  <li className="m-2 text-xl pl-4 items-center ">Home</li>
                </ul>
              </div>
              <div className="z-10">
                <ul className="flex gap-10">
                  <li className="m-2 text-xl pl-4 items-center ">Blog</li>

                  <li className="m-2 text-xl pl-4 items-center ">About us</li>

                  <li className="m-2 text-xl pl-4 items-center ">Team</li>

                  <li className="m-2 text-xl pl-4 items-center ">Contact us</li>
                </ul>
              </div>
            </div>
          </nav>
          {active ? <SmapllNavbar ShowManu={ShowManu} active={active} /> : ""}

          <div className="w-full h-[90%] md:flex flex-col sm:flex-row-reverse">
            <div className="w-full md:w-1/2 h-[100%] z-10 flex justify-center">
              <div className="md:w-1/2 h-[40%] my-auto">
                <img src={TeameWork} alt="img" className="w-80" />
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[100%] flex justify-start">
              <div className="md:w-[70%] h-auto md:my-auto z-10 my-auto md:ml-10 p-5 md:text-start py-3 text-center w-full">
                <div className="my-3">
                  <h1 className="text-4xl font-bold text-gray-600">
                    Teamwork is key
                  </h1>
                </div>
                <div className="my-3 text-gray-600 font-medium">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, maxime repellat! Illo repellat inventore nisi
                    explicabo totam deleniti eveniet? Illum.
                  </p>
                </div>
                <div className="w-full font-medium text-gray-600">
                  <button className="rounded-2xl border border-white text-sm p-2 bg-[#B3EAFF]">
                    Learn more
                  </button>
                  <button className="rounded-2xl border border-white text-sm ml-3 p-2 bg-[#B3EAFF]">
                    Get started
                  </button>
                </div>
                <div className="md:w-[70%] h-[20%] md:flex md:justify-start flex justify-center w-full  mt-10">
                  <div className="rounded-full p-1 text-white hover:text-[#B3EAFF] bg-gray-600 ml-2">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div className="rounded-full p-1 hover:text-[#B3EAFF] text-white bg-gray-600 ml-2">
                    <FaFacebookF className="w-5 h-5" />
                  </div>
                  <div className="rounded-full p-1 hover:text-[#B3EAFF] text-white bg-gray-600 ml-2">
                    <FaTumblr className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
