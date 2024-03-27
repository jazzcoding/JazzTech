import React from "react";
import { useRef } from "react";
import pic1 from "../../assets/image/promotional/1.jpg";
import pic2 from "../../assets/image/promotional/2.jpg";
import pic3 from "../../assets/image/promotional/3.jpg";
import pic4 from "../../assets/image/promotional/4.jpg";
import pic5 from "../../assets/image/promotional/5.jpg";
import pic6 from "../../assets/image/promotional/6.jpg";
import pic7 from "../../assets/image/promotional/7.jpg";

const Content = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const design = [
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
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Prototype Design
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                A premier destination for web and mobile application prototype
                design. Transforming concepts into captivating digital
                experiences with innovative solutions.
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
                  className="inline-block rounded-md border border-transparent bg-primary px-8 py-3 text-center font-medium text-white hover:bg-secondary"
                >
                  See our deisigns
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50" ref={ref}>
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
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            {design.map((design) => (
              <div className="w-full h-full mt-6">
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                  <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                    <img
                      src={design.imgUrl}
                      className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl"
                      alt={design.app}
                    ></img>
                    <img
                      src={design.imgUrl}
                      className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
                      alt={design.app}
                    ></img>
                  </div>
                </div>
                <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                </div>
                <div className="flex items-center justify-center w-ful">
                  <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl">
                    {design.app}
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
