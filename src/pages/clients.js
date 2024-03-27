import React, { useState, useEffect } from "react";
import Header from "../components/index/header";
import Footer from "../components/index/footer";
import Hero from "../components/clients/hero";
import Content from "../components/clients/content";

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
