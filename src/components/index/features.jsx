import React from "react";

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
    <div className="flex flex-col justify-center pt-[7.5vh] h-full w-screen bg-blue-50 ">
      <div className="flex justify-center items-center">
        <h1 className="w-3/4 font-inter font-bold text-dark text-4xl text-center md:w-full md:text-5xl">
          Tailor-made features
        </h1>
      </div>
      <p className="font-inter text-dark text-center w-3/4 text-sm self-center mt-4 lg:w-3/5 md:text-lg">
        Unlock the full potential of your software development endeavors with
        our tailor-made features, designed to meet your unique project
        requirements and drive innovation throughout the development lifecycle.
      </p>
      <div className="flex h-full py-[8vh] flex-wrap flex-col justify-around items-center md:flex-row md:px-[15vw]">
        <div className="grid grid-cols-1 grid-rows-5 gap-y-[6vh] gap-x-6 lg:grid-cols-6 lg:grid-rows-2 ">
          <div className="flex justify-center items-center lg:col-span-2">
            <Card
              imgUrl="https://img.icons8.com/isometric/100/web-design.png"
              title="Intuitive User Interface (UI)"
              desc="Enhance satisfaction with crafted interfaces, ensuring seamless navigation for improved experience."
            />
          </div>
          <div className="flex justify-center items-center lg:col-span-2">
            <Card
              imgUrl="https://img.icons8.com/isometric/100/time.png"
              title="Fast Loading Times"
              desc="Ensure quick content access with our optimization services, reducing frustration and boosting retention."
            />
          </div>
          <div className="flex justify-center items-center lg:col-span-2">
            <Card
              imgUrl="https://img.icons8.com/isometric/100/smartphone.png"
              title="Mobile Responsiveness"
              desc="Ensure seamless access with our mobile-responsive solutions, offering a smooth user experience."
            />
          </div>
          <div className="lg:col-start-2 flex justify-center items-center lg:col-span-2 ">
            <Card
              imgUrl="https://img.icons8.com/isometric/100/view-details.png"
              title="High-Quality Content"
              desc="Capture audience with captivating content, enhancing engagement, visibility, and experience."
            />
          </div>
          <div className="lg:col-start-4 flex justify-center items-center lg:col-span-2">
            <Card
              imgUrl="https://img.icons8.com/isometric/100/expand.png"
              title="Scalability and Flexibility"
              desc="Future-proof your website with scalable architecture, enabling seamless adaptation to evolving demands."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default features;
