import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectsItems from "../components/ProjectsItems";
import netflix1 from "../public/assets/projectinfo/Netflix/netflix1.png";
const Netflix = () => {
  return (
    <div classNameName="flex gap-8 ">
      <div className="">
        <div className="rounded-lg shadow-lg bg-white w-96 md:w-[550px]">
          <Image className="rounded-t-lg " src={netflix1} alt="" />
        </div>
      </div>



    </div>
  );
};

export default Netflix;
