import React from 'react'
import { FaTimes } from "react-icons/fa";



const SmallNavbar = ({ShowManu,active}) => {
  return (
    <>
    {
active? <nav className="w-auto md:w-full  md:hidden block bg-[#B3EAFF]/50 backdrop-blur-md
z-[-2]" >
  <div className="right-3 top-3 absolute md:hidden block">
          <FaTimes className="w-6 h-6" onClick={ShowManu}/>

        </div>
  <div className="p-2 md:flex md:justify-between">
    <div className="md:flex md:items-center z-10">
      <ul>
        <li className="m-2 text-xl pl-4 items-center ">Home</li>
      </ul>
    </div>
    <div className="z-10">
      <ul className="md:flex md:gap-10">
        <li className="m-2 text-xl pl-4 items-center ">Blog</li>

        <li className="m-2 text-xl pl-4 items-center ">About</li>

        <li className="m-2 text-xl pl-4 items-center ">Team</li>

        <li className="m-2 text-xl pl-4 items-center ">Contact us</li>
      </ul>
    </div>
  </div>
</nav>:''

    }
        
    </>
  )
}

export default SmallNavbar