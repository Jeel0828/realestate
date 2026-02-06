"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";

type Props = {
  property: {
    id: number;
    propertyName: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    price: number;
    imageUrl: string;
  };
};

const PropertyCard = ({ property }: Props) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg">
        <div className="relative">
          <Image
            src={property.imageUrl}
            alt={property.propertyName}
            width={300}
            height={300}
            className="w-full object-cover group-hover:scale-110 transition-all duration-300"
          />
          <h1 className="px-6 absolute bottom-4 left-4 text-white py-1.5 text-sm bg-black rounded-lg">
            <span className="text-base font-bold">${property.price}</span> / mo
          </h1>
          <div className="flex items-center space-x-1 px-6 absolute top-4 left-4 py-2 text-sm bg-rose-600 text-white rounded-md font-bold w-fit">
            <MdElectricBolt />
            <span>Featured</span>
          </div>
        </div>
        <div className="p-5">
          <h1 className="mt-4 group-hover:underline text-gray-900 font-bold text-lg">
            {property.propertyName}
          </h1>
          <p className="text-sm text-gray-600 mt-3">{property.location}</p>
          <div className="flex items-center justify-between mt-6 w-full lg:w-[80%]">
            <div className="flex items-center space-x-2">
              <FaBed className="text-rose-600" />
              <p className="text-xs text-gray-600">{property.bedrooms} Beds</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6 w-full lg:w-[80%]">
            <div className="flex items-center space-x-2">
              <FaBath className="text-rose-600" />
              <p className="text-xs text-gray-600">{property.bathrooms} Baths</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6 w-full lg:w-[80%]">
            <div className="flex items-center space-x-2">
              <FaSquare className="text-rose-600" />
              <p className="text-xs text-gray-600">{property.size} Sqrt</p>
            </div>
          </div>
          <div className="w-full h-[1.2px] mt-4 mb-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xs text-gray-600">For Rent</h1>
              <div className="flex items-center space-x-4 text-gray-500">
                <BiLinkExternal />
                <BsPlusSquare />
                <BsHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
