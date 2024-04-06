import React from "react";
import proimg1 from "../assets/images/abc2.jpg.jpg";

import { TypeAnimation } from "react-type-animation";
// import { BsFacebook } from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className=" w-full h-screen object-cover  object-left "
        src={proimg1}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg bg-black ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center  md:items-start items-center">
          <h1 className="sm:text-5xl  text-4xl font-bold text-white ">
            {" "}
            <span className="text-white/90"> I am </span> Reshin
          </h1>
          <h2 className="flext sm:3xl text-2xl pt-4 text-white/90 ">
            {" "}
            I am a{" "}
            <span className="text-blue-800">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "  developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  // '',
                  // 1000,
                  // 'de',
                  // 1000,
                  // 'dev',
                  // 1000,
                  // 'deve',
                  // 1000,
                  // 'devel',
                  // 1000,
                  // 'develo',
                  // 1000,
                  // 'develop',
                  // 1000,
                  // 'develope',
                  // 1000,
                  // 'developer',
                  // 1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />{" "}
            </span>
          </h2>
          <div className="flex justify-between pt-6 max-w-[50px] w-full">
            <FaInstagram className="cursor-pointer" size={20} />
            {/* <FaX className='cursor-pointer' size={20}/> */}
            {/* <FaSpotify className='cursor-pointer' size={20}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
