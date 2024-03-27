import React, { useState, useEffect } from "react";
import Header from "../components/index/header";
import Footer from "../components/index/footer";
import Hero from "../components/designs/hero";
import Content from "../components/designs/content";
import { InfinitySpin } from "react-loader-spinner";

const Design = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default Design;
