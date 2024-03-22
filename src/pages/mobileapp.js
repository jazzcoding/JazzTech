import React from "react";
import Header from "../components/index/header";
import Footer from "../components/index/footer";
import Hero from "../components/mobileapps/hero";
import Content from "../components/mobileapps/content";
const mobileapp = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default mobileapp;
