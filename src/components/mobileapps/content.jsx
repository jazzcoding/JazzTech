import React from "react";
import pic1 from "../../assets/image/promotional/1.jpg";
import pic2 from "../../assets/image/promotional/2.jpg";
import pic3 from "../../assets/image/promotional/3.jpg";
import pic4 from "../../assets/image/promotional/4.jpg";
import pic5 from "../../assets/image/promotional/5.jpg";
import pic6 from "../../assets/image/promotional/6.jpg";
import pic7 from "../../assets/image/promotional/7.jpg";

import caploScreen from "../../assets/image/Screenshots/caplo.png";
import croplifyScreen from "../../assets/image/Screenshots/croplify.png";
import { useRef } from "react";
import { LineWave } from "react-loader-spinner";
const Content = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const mobileScreen = [
    {
      app: "Caplo",
      imgUrl: caploScreen,
      description: "",
      linkGoogle: "",
      linkApple: "",
    },
    {
      app: "Croplify",
      imgUrl: croplifyScreen,
      description: "",
      linkGoogle: "",
      linkApple: "",
    },
    {
      app: "Warnya",
      imgUrl: "",
      description: "",
      linkGoogle: "",
      linkApple: "",
    },
  ];
  return (
    <>
      <div className="relative overflow-hidden bg-white dark:bg-darkBG">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-lightBG">
                Responsive Mobile Application
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:darkLight">
                We specialize in prototype design for web and mobile
                applications. Experience our innovative approach to crafting
                captivating digital experiences.
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
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClick}
                  className="hidden rounded-md border border-transparent bg-primary px-8 py-3 text-center font-medium text-white hover:bg-secondary md:inline-block dark:bg-darkLight dark:text-dark dark:hover:bg-dark dark:hover:text-lightBG"
                >
                  See our mobile apps
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
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {mobileScreen.map((mobileScreen) => (
              <div className="flex flex-col items-center gap-6">
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl dark:text-lightBG">
                  {mobileScreen.app}
                </h1>
                <div className="relative mx-6 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] ">
                  <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <img
                      src={mobileScreen.imgUrl}
                      className="dark:hidden w-[272px] h-[572px]"
                      alt=""
                    ></img>
                    <img
                      src={mobileScreen.imgUrl}
                      className="hidden dark:block w-[272px] h-[572px]"
                      alt=""
                    ></img>
                  </div>
                </div>
                <section className="text-gray-600 body-font">
                  <div className="container px-5 mx-auto flex items-center md:flex-row flex-col ">
                    <div className="flex flex-col  gap-6 md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 ">
                      <a
                        target="_blank"
                        href={mobileScreen.linkGoogle}
                        className="bg-gray-100 border-2 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-6 h-6"
                          viewBox="0 0 512 512"
                        >
                          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                        </svg>
                        <span className="ml-4 flex items-start flex-col leading-none">
                          <span className="text-xs text-gray-600 mb-1">
                            GET IT ON
                          </span>
                          <span className="title-font font-medium">
                            Google Play
                          </span>
                        </span>
                      </a>
                      <a
                        target="_blank"
                        href={mobileScreen.linkApple}
                        className="bg-gray-100 border-2 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-6 h-6"
                          viewBox="0 0 305 305"
                        >
                          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                        </svg>

                        <span className="ml-4 flex items-start flex-col leading-none">
                          <span className="text-xs text-gray-600 mb-1">
                            Download on the
                          </span>
                          <span className="title-font font-medium">
                            App Store
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
