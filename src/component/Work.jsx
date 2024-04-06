import React from "react";
import WorkItem from "./WorkItem";
const data = [
  {
    year: 2022,
    title: "Education",
    
    details: " I have completed my degree course in  Bsc,CS with one paperback"
  },
  {
    
    title: "Self Learning",
    details: "I started creating"
  },
  {
    year: 2024,
    title: "Internsip",
    duration: "3 months",
    details: "Through the understandings i gained through the self learning method i got an internship oppertunity at 'ZyFARER INNOVATIONS LLP' for 3 months   "
  },
  
  {
    title: "Present Objective",
    details: "seeking for job oppertunities at good companies"
  
  }
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-white/90 pb-10">
        About
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
