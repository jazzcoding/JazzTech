import React from "react";
import "../../assets/css/background.css";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
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
const features = [
  {
    name: "Custom App",
    description: "We will create a Mobile app based on your ideas!",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Expert Consultancy",
    description: "Want to get a feedback from an expert?",
    icon: LockClosedIcon,
  },
  {
    name: "Custom Website",
    description: "We will create a website based on your designs and ideas!",
    icon: ArrowPathIcon,
  },
  {
    name: "Prototype Design",
    description: "Not a designer by nature?",
    icon: FingerPrintIcon,
  },
];
const services = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Our Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16 text-left">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
