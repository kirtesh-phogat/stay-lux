import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/hero";
import SearchBar from "../Components/SearchBar";
import PopularDestinations from "../Components/PopularDestinations";
import Features from "../Components/Features";
import FeaturedHotels from "../Components/FeaturedHotels";
import Footer from "../Components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <PopularDestinations />
      <Features />
      <FeaturedHotels />
      <Footer />
    </>
  );
};

export default Home;