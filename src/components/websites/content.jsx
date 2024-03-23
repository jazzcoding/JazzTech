import React from "react";
import croplify from "../../assets/image/croplify.png";
import croplifyPic from "../../assets/image/croplifyProfile.jpg";
import react from "../../assets/image/logos/react.png";
import warnyaProfile from "../../assets/image/WarnyaProfile.jpg";
import caploProfile from "../../assets/image/caploProfile.jpg";
import caplo from "../../assets/image/caplo.jpeg";
import caploScreen from "../../assets/image/Screenshots/caplo.png";
import croplifyScreen from "../../assets/image/Screenshots/croplify.png";

const content = () => {
  const websiteScreen = [
    {
      app: "Caplo",
      imgUrl: "",
      description: "",
    },
    {
      app: "Croplify",
      imgUrl: "",
      description: "",
    },
    {
      app: "Warnya",
      imgUrl: "",
      description: "",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary text-left md:text-center">
            Lorem Ipsum
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left md:text-center">
            Lorem Ipsul dolor
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-left md:text-center">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {websiteScreen.map((websiteScreen) => (
            <div className="w-full h-full">
              <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                  <img
                    src={websiteScreen.imgUrl}
                    class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl"
                    alt={websiteScreen.app}
                  ></img>
                  <img
                    src={websiteScreen.imgUrl}
                    class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
                    alt={websiteScreen.app}
                  ></img>
                </div>
              </div>
              <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
              </div>
              <div className="flex items-center justify-center w-ful">
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl">
                  {websiteScreen.app}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default content;
