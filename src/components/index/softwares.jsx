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
const softwares = () => {
  return (
    <div className="z-20 bg-blue-50 border-y-[1px] h-max border-darkLight border-opacity-5">
      <div className="px-5 flex justify-center items-center flex-wrap py-2 md:px-[5vw] md:gap-6">
        <ul className="w-1/2 justify-around md:flex md:w-full ">
          <li className="flex items-center justify-center">
            <img
              src={adalo}
              alt=""
              className=" float-left w-[100px] h-[100px] object-contain bg-cover"
            />
          </li>
          <li className="flex items-center justify-center">
            <img
              src={android}
              alt=""
              className=" float-left w-[100px] h-[100px] object-contain bg-cover"
            />
          </li>
          <li className="flex items-center justify-center">
            <img
              src={figma}
              alt=""
              className=" float-left w-[100px] h-[100px] object-contain bg-cover"
            />
          </li>
          <li className="flex items-center justify-center">
            <img
              src={firebase}
              alt=""
              className=" float-left w-[100px] h-[100px] object-contain bg-cover"
            />
          </li>
          <li className="flex items-center justify-center">
            <img
              src={react}
              alt=""
              className=" float-left w-[100px] h-[100px] object-contain bg-cover"
            />
          </li>
        </ul>
        <ul className="  w-1/2 justify-around md:flex md:w-full">
          <li className="flex items-center justify-center">
            <img
              src={git}
              alt=""
              className=" float-left w-[100px] h-[100px] object-contain bg-cover"
            />
          </li>
          <li className="flex items-center justify-center">
            <img
              src={photoshop}
              alt=""
              className=" float-left w-[100px] h-[100px] object-contain bg-cover"
            />
          </li>
          <li className="flex items-center justify-center">
            <img
              src={wordpress}
              alt=""
              className=" float-left w-[100px] h-[100px] object-contain bg-cover"
            />
          </li>
          <li className="flex items-center justify-center">
            <img
              src={adobexd}
              alt=""
              className=" float-left w-[75px] h-[75px] object-contain bg-cover"
            />
          </li>
          <li className="flex items-center justify-center">
            <img
              src={githubDark}
              alt=""
              className=" float-left w-[75px] h-[75px] object-contain bg-cover"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default softwares;
