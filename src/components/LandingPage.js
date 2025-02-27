import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import PhotosVideosSlider from "./PhotosVideosSlider";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <PhotosVideosSlider />
      <Testimonials />
      <Footer />
    </>
  );
}
