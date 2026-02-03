import SectionHeading from "@/components/Helper/SectionHeading";
import { buildings } from "@/data/data";
import React from "react";
import BuildingFeaturesCard from "./BuildingFeaturesCard";

const BuildingFeatures = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Explore Building Features" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 items-center mt-14">
          {buildings.map((building) => {
            return (
              <div key={building.id}>
                <BuildingFeaturesCard building={building} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BuildingFeatures;
