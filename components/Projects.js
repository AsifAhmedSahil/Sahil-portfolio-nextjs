import React from "react";
import Image from "next/image";
import Link from "next/link";
import justlikenew from "../public/assets/projects/justlikenew.png";
import resturents from "../public/assets/projects/resturent.png";
import microsoft from "../public/assets/projects/microsoft.png";
import datasecure from "../public/assets/projects/datasecure.png";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import web3Img from "../public/assets/projects/web3.0Img.png";
import ProjectsItems from "./ProjectsItems";

const Projects = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-purple-500 ">
          Projects
        </p>
        <h2 className="py-4">What I have Build</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItems
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectsItems
            title="Microsoft Clone"
            backgroundImg={microsoft}
            projectUrl="/microsoft"
          />

          <ProjectsItems
            title="Web3.0 - Services"
            backgroundImg={web3Img}
            projectUrl="/web3services"
          />
          <ProjectsItems
            title="Data Secured Protection"
            backgroundImg={datasecure}
            projectUrl="/datasecure"
          />
          <ProjectsItems
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />

          <ProjectsItems
            title="Twitter Clone"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
          <ProjectsItems
            title="Just Like New"
            backgroundImg={justlikenew}
            projectUrl="/justlikenew"
          />
          <ProjectsItems
            title="Uber-eats-clone"
            backgroundImg={resturents}
            projectUrl="/resturent"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
