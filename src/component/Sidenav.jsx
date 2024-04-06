import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GiMicrophone } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { FaMusic } from "react-icons/fa6";
import { GrHomeOption } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { FcAbout } from "react-icons/fc";

function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // console.log('state Changed')
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute text-white top-4 right-4 z-[99] m"
        size={25}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-black shadow-blue-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrHomeOption className="text-blue-800" size={20} />
            <span className="pl-4 text-white">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-1000 shadow-blue-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FcAbout className="text-blue-800" ize={20} />
            <span className="pl-4 text-white">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-black shadow-blue-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects className="text-blue-800" size={20} />
            <span className="pl-4 text-white">Projects</span>
          </a>
          {/* <a onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
          
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a> */}
          <a
            onClick={handleNav}
            href="#Contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-black shadow-blue-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson className="text-blue-800" size={20} />
            <span className="pl-4 text-white"> Contact </span>
          </a>
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-black shadow-blue-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <span className="pl-4 font-thin  text-white">back to home</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="  rounded-full shadow-sm bg-black shadow-white m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <GrHomeOption className="text-blue-800" size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-sm bg-black shadow-white m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-300  onClick={handleNav}"
          >
            <FcAbout className="text-white" size={20} />
          </a>
          <a
            href="#projects"
            className=" rounded-full shadow-sm bg-black shadow-white m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <GrProjects className="text-blue-800" size={20} />
          </a>

          <a
            href="#Contact"
            className=" rounded-full shadow-sm bg-black shadow-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <BsPerson className="text-blue-800" size={20} />
          </a>
          <a
            href="#main"
            className=" rounded-full shadow-sm bg-black shadow-white m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-300 "
          ></a>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
