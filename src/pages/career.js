import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import Header from "../components/careers/header";
import Hero from "../components/careers/hero";
import Footer from "../components/index/footer";

export default function Career() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
