import React from "react";

import adalo from "../../assets/image/logos/adalo.png";
import android from "../../assets/image/logos/androidstudio.png";
import figma from "../../assets/image/logos/figma.png";
import firebase from "../../assets/image/logos/firebase.png";
import githubDark from "../../assets/image/logos/github-dark.png";
import githubLight from "../../assets/image/logos/github-light.png";
import git from "../../assets/image/logos/git.png";
import photoshop from "../../assets/image/logos/photoshop.png";
import react from "../../assets/image/logos/react.png";
import wordpress from "../../assets/image/logos/wordpress.png";
import adobexd from "../../assets/image/logos/adobexd.png";
import { motion } from "framer-motion";
const softwares = () => {
  return (
    <div className="z-20 bg-blue-50 border-y-[1px] h-max border-darkLight border-opacity-5 lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div class="relative flex overflow-x-hidden">
        <div className="px-5 w-full flex justify-center items-center flex-wrap py-2 md:px-[5vw] md:gap-6 lg:flex-nowrap lg:inline-flex lg:w-full lg:animate-marquee-infinite lg:py-4 lg:animate-marquee lg:whitespace-nowrap lg:px-0 lg:gap-0">
          <ul className="flex flex-col justify-center items-center w-1/2 md:flex md:w-full md:flex-row md:justify-around ">
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img src={adalo} alt="" className=" float-left object-contain " />
            </li>
            <li className="flex items-center justify-center w-[125px] h-[125px]">
              <img
                src={android}
                alt=""
                className=" float-left object-contain "
              />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img src={figma} alt="" className=" float-left object-contain " />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img
                src={firebase}
                alt=""
                className=" float-left object-contain "
              />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img src={react} alt="" className=" float-left object-contain " />
            </li>
          </ul>
          <ul className="flex flex-col justify-center items-center  w-1/2 md:flex md:w-full md:flex-row md:justify-around">
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img src={git} alt="" className=" float-left object-contain " />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img
                src={photoshop}
                alt=""
                className=" float-left w-4/5 object-contain "
              />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img
                src={wordpress}
                alt=""
                className=" float-left  w-4/5 object-contain "
              />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img
                src={adobexd}
                alt=""
                className=" float-left w-3/5 h-auto object-contain"
              />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img
                src={githubDark}
                alt=""
                className=" float-left w-3/5 h-auto object-contain"
              />
            </li>
          </ul>
        </div>

        <div className="px-5 h-full hidden justify-center items-center flex-wrap py-2 md:px-[5vw] md:gap-6 lg:flex-nowrap lg:inline-flex lg:w-full lg:absolute lg:top-0 lg:py-4 lg:animate-marquee2 lg:whitespace-nowrap lg:px-0 lg:gap-0 lg:items-center lg:justify-center">
          <ul className="flex flex-col justify-center items-center w-1/2 md:flex md:w-full md:flex-row md:justify-around ">
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img src={adalo} alt="" className=" float-left object-contain " />
            </li>
            <li className="flex items-center justify-center w-[125px] h-[125px]">
              <img
                src={android}
                alt=""
                className=" float-left object-contain "
              />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img src={figma} alt="" className=" float-left object-contain " />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img
                src={firebase}
                alt=""
                className=" float-left object-contain "
              />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img src={react} alt="" className=" float-left object-contain " />
            </li>
          </ul>
          <ul className="flex flex-col justify-center items-center  w-1/2 md:flex md:w-full md:flex-row md:justify-around">
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img src={git} alt="" className=" float-left object-contain " />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img
                src={photoshop}
                alt=""
                className=" float-left w-4/5 object-contain "
              />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img
                src={wordpress}
                alt=""
                className=" float-left  w-4/5 object-contain "
              />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img
                src={adobexd}
                alt=""
                className=" float-left w-3/5 h-auto object-contain"
              />
            </li>
            <li className="flex items-center justify-center w-[100px] h-[100px]">
              <img
                src={githubDark}
                alt=""
                className=" float-left w-3/5 h-auto object-contain"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default softwares;
