import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectsItems from "../components/ProjectsItems";
import microsoft from "../public/assets/projectinfo/microsoft/microsoft1.png";
const MicrosoftDetails = () => {
  return (
    <div classNameName="flex gap-8 ">
      <div className="">
        <div className="rounded-lg shadow-lg bg-white w-96 md:w-[550px]">
          <Image className="rounded-t-lg " src={microsoft} alt="" />
        </div>
      </div>



    </div>
  );
};

export default MicrosoftDetails;
