"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { properties } from "@/data/data";
import { FaBed, FaBath, FaSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero/Hero";

const PropertyDetailsPage = ({ params }: { params: { id: string } }) => {
    const propertyId = parseInt(params.id);
    const property = properties.find((p) => p.id === propertyId);

    if (!property) {
        notFound();
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" as const }
        },
    };

    const featureVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    };

    return (
        <>
            <Hero />
            <motion.div
                className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 md:py-20"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{
                    transition: "all 0.5s ease-in-out",
                }}
            >
                <div className="w-[80%] mx-auto">
                    <motion.div variants={childVariants}>
                        <Link
                            href="/"
                            className="inline-flex items-center text-rose-600 hover:text-black mb-6 mt-8 transition-colors duration-300 tracking-wider"
                        >
                            ← Back to Properties
                        </Link>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden"
                        variants={childVariants}
                    >
                        {/* Image Section */}
                        <motion.div className="relative h-80 md:h-96 lg:h-full" variants={imageVariants}>
                            <Image
                                src={property.imageUrl}
                                alt={property.propertyName}
                                fill
                                className="object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.div>

                        {/* Details Section */}
                        <motion.div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between" variants={childVariants}>
                            <div>
                                <motion.h1
                                    className="text-[25px] font-medium text-gray-900 mb-3"
                                    variants={childVariants}
                                    style={{ letterSpacing: "1px" }}

                                >
                                    {property.propertyName}
                                </motion.h1>
                                <motion.div
                                    className="flex items-center text-gray-700 mb-6"
                                    variants={childVariants}
                                >
                                    <MdLocationOn className="mr-2 text-xl text-rose-600" />
                                    <span className="text-md" style={{ letterSpacing: "0.5px" }}>{property.location}</span>
                                </motion.div>
                            </div>

                            <motion.div
                                className="grid grid-cols-2 md:grid-col-3 gap-4 mb-8"
                                variants={containerVariants}
                            >
                                <motion.div
                                    className="flex flex-col items-center bg-indigo-50 p-4 rounded-xl shadow-sm"
                                    variants={childVariants}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <FaBed className="text-rose-600 text-2xl mb-2" />
                                    <p className="text-xl font-semibold">{property.bedrooms}</p>
                                    <p className="text-sm text-gray-600">Bedrooms</p>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col items-center bg-indigo-50 p-4 rounded-xl shadow-sm"
                                    variants={childVariants}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <FaBath className="text-rose-600 text-2xl mb-2" />
                                    <p className="text-xl font-semibold">{property.bathrooms}</p>
                                    <p className="text-sm text-gray-600">Bathrooms</p>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col items-center bg-indigo-50 p-4 rounded-xl shadow-sm"
                                    variants={childVariants}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <FaSquare className="text-rose-600 text-2xl mb-2" />
                                    <p className="text-xl font-semibold">{property.size}</p>
                                    <p className="text-sm text-gray-600">Sq Ft</p>
                                </motion.div>
                            </motion.div>

                            <motion.div className="mb-8" variants={childVariants}>
                                <p className="text-2xl font-semibold text-rose-600">
                                    ${property.price.toLocaleString()}
                                </p>
                                <p className="text-gray-500">Total Price</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div className="mt-12 space-y-12" variants={childVariants}>
                        <motion.section variants={childVariants}>
                            <h2 className="text-2xl font-medium mb-6 text-gray-900" style={{ letterSpacing: "1px" }}>About This Property</h2>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg" style={{ letterSpacing: "0.5px" }}>
                                This stunning {property.propertyName.toLowerCase()} is located in the heart of {property.location}.
                                Featuring {property.bedrooms} spacious bedrooms and {property.bathrooms} modern bathrooms,
                                this property offers {property.size} square feet of living space. Perfect for families or
                                professionals looking for a comfortable and stylish living environment.
                            </p>
                        </motion.section>

                        <motion.section
                            variants={childVariants}
                            className="mt-12"
                        >
                            <h2 className="text-2xl font-medium mb-8 text-gray-900 tracking-tight" style={{ letterSpacing: "1px" }}>
                                Property Features
                            </h2>

                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                                variants={containerVariants}
                            >
                                {[
                                    "Modern Kitchen",
                                    "Spacious Living Room",
                                    "Natural Lighting",
                                    "Parking Available",
                                    "Air Conditioning",
                                    "Security System",
                                ].map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        className="group relative flex items-center gap-4 bg-white/80 backdrop-blur-md border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                                        variants={featureVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -4 }}
                                    >
                                        <div
                                            className="w-4 h-4 rounded-full bg-gradient-to-br from-rose-500 to-rose-500 shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                                        />

                                        <span
                                            className="text-gray-800 font-medium text-sm md:text-base group-hover:text-black transition-colors duration-300"
                                            style={{ letterSpacing: "0.5px" }}
                                        >
                                            {feature}
                                        </span>

                                        <div
                                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500/10 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.section>

                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default PropertyDetailsPage;