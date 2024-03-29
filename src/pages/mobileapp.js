import React, { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import Header from "../components/index/header";
import Footer from "../components/index/footer";
import Hero from "../components/mobileapps/hero";
import Content from "../components/mobileapps/content";
const Mobileapp = () => {
  useEffect(() => {
    setTimeout(function () {
      var loader = document.getElementById("loader");
      loader.style.opacity = 0;
      loader.style.zIndex = 0;
      setTimeout(function () {
        loader.style.display = "none";
      }, 500);
    }, 1000);
  }, []);
  return (
    <div>
      <div
        className="bg-blue-50 fixed w-screen h-screen dark:bg-darkBG z-[1000]"
        id="loader"
      >
        <div className="absolute opacity-100 top-0 left-0 flex justify-center items-center w-screen h-screen bg-blue-50 z-[1000] transition-opacity duration-500 dark:bg-darkBG dark:text-darkLight">
          <InfinitySpin
            visible={true}
            width="200"
            color="currentColor"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      </div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default Mobileapp;
