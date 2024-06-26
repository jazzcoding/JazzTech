import React from "react";
import {
  ComputerDesktopIcon,
  NewspaperIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
} from "@heroicons/react/20/solid";
import promotion from "../../assets/image/promotional/barangayMo_promo.png";
const feat = [
  {
    name: "Intuitive User Interface (UI).",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Fast Loading Times",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BoltIcon,
  },
  {
    name: "Mobile Responsiveness",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: DevicePhoneMobileIcon,
  },
];

const Card = (props) => {
  return (
    <div className="transition-all duration-[.5s] hover:-translate-y-10 border-2 border-blue-200 h-full py-[2vh] rounded-xl flex flex-col gap-4 justify-center items-center w-3/4 lg:w-full">
      <img width="75" height="75" src={props.imgUrl} alt="web-design" />
      <h2 className="font-inter font-bold text-xl text-dark lg:text-2xl">
        {props.title}
      </h2>
      <p className="font-inter text-dark w-full text-center px-6 lg:px-10 lg:w-full">
        {props.desc}
      </p>
    </div>
  );
};
const features = () => {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-darkBG">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary dark:text-darkLight">
                  Tailor-made Features
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-lightBG">
                  A better workflow
                </p>
                <p className="mt-6 text-lg text-justify leading-8 text-gray-600 dark:text-darkLight">
                  Unlock the full potential of your software development
                  endeavors with our tailor-made features, designed to meet your
                  unique project requirements and drive innovation throughout
                  the development lifecycle.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none ">
                  {feat.map((feat) => (
                    <div key={feat.name} className="relative pl-9 text-left">
                      <dt className="inline font-semibold text-gray-900 dark:text-lightBG">
                        <feat.icon
                          className="absolute left-1 top-1 h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                        {feat.name}
                      </dt>{" "}
                      <dd className="inline dark:text-darkLight">
                        {feat.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={promotion}
                alt="Product showcase here"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default features;
