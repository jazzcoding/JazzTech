import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/index/header";
import Hero from "./components/index/hero";
import Software from "./components/index/softwares";
import Features from "./components/index/features";
import Testimonials from "./components/index/testimonials";
import Services from "./components/index/services";
import Footer from "./components/index/footer";
import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";
function App() {
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
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1229134782043168";
    script.async = true;
    script.crossOrigin = "anonymous";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="App">
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
      <Navbar />
      <Hero />
      <Software />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
