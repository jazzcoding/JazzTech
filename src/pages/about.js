import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import Header from "../components/index/header";
import Hero from "../components/about/hero";
import Content from "../components/about/content";
import Footer from "../components/index/footer";
const About = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default About;
