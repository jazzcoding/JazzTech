import React from "react";
import Header from "../components/index/header";
import Footer from "../components/index/footer";
import Hero from "../components/websites/hero";
import Content from "../components/websites/content";
const website = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default website;
