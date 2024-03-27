import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import Header from "../components/index/header";
import Footer from "../components/index/footer";
import Hero from "../components/websites/hero";
import Content from "../components/websites/content";
const Website = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default Website;
