import React from "react";
import pic1 from "../../assets/image/promotional/1.jpg";
import pic2 from "../../assets/image/promotional/2.jpg";
import pic3 from "../../assets/image/promotional/3.jpg";
import pic4 from "../../assets/image/promotional/4.jpg";
import pic5 from "../../assets/image/promotional/5.jpg";
import pic6 from "../../assets/image/promotional/6.jpg";
import pic7 from "../../assets/image/promotional/7.jpg";

import { useRef } from "react";
const Content = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
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
    <>
      <div className="relative overflow-hidden bg-white dark:bg-darkBG">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-lightBG">
                Responsive Web Applications
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:darkLight">
                Elevate your online presence with our dynamic solutions,
                seamlessly adapting to every device. Join us and unlock your
                website's potential across all platforms.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={pic1}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic2}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic4}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic3}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic5}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic6}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic7}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                      </div>
                      `
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClick}
                  className="hidden rounded-md border border-transparent bg-primary px-8 py-3 text-center font-medium text-white hover:bg-secondary md:inline-block dark:bg-darkLight dark:text-dark dark:hover:bg-dark dark:hover:text-lightBG"
                >
                  See our websites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-blue-50 dark:bg-darkBG dark:border-y-[.1rem] dark:border-dark"
        ref={ref}
      >
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary text-left md:text-center dark:text-darkLight">
              Lorem Ipsum
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left md:text-center dark:text-lightBG">
              Lorem Ipsul dolor
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left md:text-center dark:text-darkLight">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {websiteScreen.map((websiteScreen) => (
              <div className="w-full h-full  mt-6">
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                  <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800 ">
                    <img
                      src={websiteScreen.imgUrl}
                      className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl"
                      alt={websiteScreen.app}
                    ></img>
                    <img
                      src={websiteScreen.imgUrl}
                      className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
                      alt={websiteScreen.app}
                    ></img>
                  </div>
                </div>
                <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                </div>
                <div className="flex items-center justify-center w-ful">
                  <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl dark:text-lightBG">
                    {websiteScreen.app}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
