import React from "react";
import quote from "../../assets/image/quote.png";
import adalo from "../../assets/image/logos/adalo.png";
import photoshop from "../../assets/image/logos/photoshop.png";
import react from "../../assets/image/logos/react.png";
const Box = (props) => {
  return (
    <div className={props.classItems}>
      <img src={props.image} alt="" width="100" height="75" />
      <div className="flex mt-6 gap-4 items-start justify-start">
        <img src={quote} alt="" width="25" height="25" />
        <div className="flex flex-col items-start ">
          <p className="text-left font-inter text-darkLight text-md">
            {props.comment}
          </p>
          <p className="mt-5 font-inter font-medium text-dark">{props.name}</p>
          <p className="font-inter text-darkLight text-md font-normal">
            {props.app}
          </p>
        </div>
      </div>
    </div>
  );
};
const testimonials = () => {
  return (
    <div className=" bg-blue-100 px-[10vw] w-screen h-screen py-[10vh]">
      {/* LARGE DEVICES */}
      <div className=" h-full gap-10 md:hidden sm:hidden lg:flex">
        <div className="flex mt-[10vh] z-10 flex-col left w-1/2">
          <div className="relative flex flex-col justify-center items-start">
            <div className="absolute -top-10 -left-28 -z-10 left-">
              <img src={quote} alt="" width="150" height="150" />
            </div>
            <h1 className="font-inter font-semibold text-5xl w-4/5 text-left text-dark">
              Real Stories from Real Clients
            </h1>
            <p className="py-2 font-inter font-normal text-dark ">
              Get Inspired by these stories.
            </p>
          </div>
          <div className=" self-end mt-[5vh]  w-3/4 h-full">
            <Box
              classItems=" p-7 bg-white w-full rounded-lg flex flex-col shadow-md"
              image={adalo}
              comment=" To quickly start my startup landing page design, I was looking for a
            landing page UI Kit. Landify is one of the best landing page UI kit
            I have come across. It’s so flexible, well organised and easily
            editable."
              name="Jizan Villafuerte"
              app="Adalo"
            />
          </div>
        </div>
        <div className="right flex flex-col w-1/3">
          <div className="flex flex-col gap-10 self-start w-full h-full">
            <Box
              classItems="p-7 bg-white w-full rounded-lg flex flex-col shadow-md"
              image={photoshop}
              comment=" To quickly start my startup landing page design, I was looking for a
            landing page UI Kit. Landify is one of the best landing page UI kit
            I have come across. It’s so flexible, well organised and easily
            editable."
              name="Jazz Capuli"
              app="Adalo"
            />
            <Box
              classItems="p-7 bg-white w-5/6 rounded-lg flex flex-col shadow-md"
              image={react}
              comment=" To quickly start my startup landing page design, I was looking for a
            landing page UI Kit. Landify is one of the best landing page UI kit
            I have come across. It’s so flexible, well organised and easily
            editable."
              name="Jizan Villafuerte"
              app="Adalo"
            />
          </div>
        </div>
      </div>
      {/* SMALL DEVICES */}
      <div>
        <div className="left lg:hidden md:flex sm:flex">
          <h1 className="font-inter font">Real Stories from Real Clients</h1>
          <p className="font-inter">Get Inspired by these stories.</p>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default testimonials;
