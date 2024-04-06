import React from "react";
// import AudioPlayer from 'react-audio-player';

const ProjectItem = ({ img, title, description }) => {
  return (
    <div
      className="relative flex  items-center justify-center h-auto w-[full] shadow-md
     shadow-blue-800 rounded-xl group
      hover:bg-gradient-to-l from-blue-950 to-black"
    >
      <img
        src={img}
        alt="/"
        className="rounded-xl  w-full h-[400px] border- object-cover border- group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <h4 className="text-2 font-thin text-white m-auto p-2">
          {description}
        </h4>
        <p className="pb-4 pt-2 text-white text-center">
          React.js & tailwindcss
        </p>
        <a href="/"></a>
      </div>
      <div className="absolute  mt-52 ">
        {/* <AudioPlayer className="hidden  group-hover:block cursor-pointer text-teal-600 "
        src={audio}  // Update with the actual path to your audio file
        autoPlay={false}
        controls
      /> */}
      </div>
    </div>
  );
};

export default ProjectItem;
