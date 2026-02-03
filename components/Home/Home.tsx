import React from "react";
import Hero from "../Hero/Hero";
import AppartmentType from "./AppartmentType/AppartmentType";
import Properties from "./Properties/Properties";
import CityProperties from "./CityProperties/CityProperties";
import BuildingFeatures from "./BuildingFeatures/BuildingFeatures";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <AppartmentType />
      <Properties />
      <CityProperties />
      <BuildingFeatures />
      <Reviews />
    </div>
  );
};

export default Home;
