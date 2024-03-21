import React from "react";
import Iphone from "../../assets/image/iphone.png";
import "../../assets/css/background.css";
import aboutBg from "../../assets/image/about2.png";
const hero = () => {
  return (
    <div className="relative h-full lg:shadow-lg lg:h-[75vh]">
      <div className=" z-10 overflow-hidden bg-white w-screen flex-row px-5 justify-center items-center md:px-[5vw] lg:flex md:justify-center md:items-center md:h-full ">
        <div className=" overflow-hidden pt-[20vh] py-[10vh] w-full flex h-full flex-col justify-start items-start gap-4 z-10 md:pt-[10vh] lg:pt-0 lg:py-[10vh] md:justify-end md:items-center  ">
          <h1 className="font-inter font-bold text-dark text-5xl text-left lg:text-8xl z-20">
            We are JazzTech
          </h1>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-screen h-full">
        <img
          src={aboutBg}
          alt=""
          className="object-cover w-screen h-full md:h-full -z-10 opacity-80"
        />
      </div>
    </div>
  );
};

export default hero;
