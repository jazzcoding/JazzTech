import React from "react";
import "../../assets/css/background.css";
const Box = (props) => {
  return (
    <div className="flex flex-col mt-4 items-start lg:gap-2 lg:w-1/4 lg:py-5">
      <img src={props.imgUrl} alt="" height="50" width="50" />
      <h1 className="font-inter text-left text-xl font-semibold text-dark">
        {props.title}
      </h1>
      <p className="font-inter font-regular text-darkLight text-left">
        {props.details}
      </p>

      <a href="">
        <div className="flex gap-6 group">
          <p className="text-primary">Know more</p>
          <p className="text-primary group-hover:animate-slide ">&rarr;</p>
        </div>
      </a>
    </div>
  );
};
const services = () => {
  return (
    <div className="flex flex-col w-screen py-[10vh] px-[5vw]">
      <div className="w-full h-1/5 md:w-1/2">
        <div className="flex flex-col w-full items-start justify-center">
          <h1 className="font-inter text-4xl text-dark font-bold ">
            Our Services
          </h1>
          <hr className="w-1/4 my-6 bg-blue-50 h-[1px] border-0 border-t-[3px] border-tertiary lg:w-1/6" />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full h-4/5 md:w-full md:flex-row md:justify-between">
        <Box
          title="Custom App"
          details="We will create a Mobile app based on your ideas!"
          imgUrl="https://img.icons8.com/isometric/100/web-design.png"
        />
        <Box
          title="Expert Consultancy"
          details="Want to get a feedback from an expert?"
          imgUrl="https://img.icons8.com/isometric/100/smartphone.png"
        />
        <Box
          title="Custom Website"
          details="We will create a website based on your designs and ideas!"
          imgUrl="https://img.icons8.com/isometric/100/web-design.png"
        />
        <Box
          title="Prototype Design"
          details="Lack of creativity?"
          imgUrl="https://img.icons8.com/isometric/100/view-details.png"
        />
      </div>
    </div>
  );
};

export default services;
