import React from "react";
import ProjectItem from "./ProjectItem";
import proimg from "../assets/images/circleb.jpg";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-white/90">
        Projects
      </h1>
      <p className="text-center text-white/90 py-8">
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia omnis
        dolorum, consequuntur repellat est incidunt exercitationem facilis quo
        maiores tempora cumque, aliquam accusamus nemo vero! Placeat repudiandae
        porro quia perferendis.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={proimg} 
          title="E-commerse Web app"
          description="Website which showcase garment items"
        />
        <ProjectItem
          img={proimg}
          title="Food App clone"
          description="Website which showcase nearby restaurents and their menus using live apis by swiggy "
        />
      </div>
    </div>
  );
};

export default Project;
