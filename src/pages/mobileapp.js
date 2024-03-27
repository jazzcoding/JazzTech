import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import Header from "../components/index/header";
import Footer from "../components/index/footer";
import Hero from "../components/mobileapps/hero";
import Content from "../components/mobileapps/content";
const Mobileapp = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default Mobileapp;
