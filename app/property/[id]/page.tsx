"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { properties } from "@/data/data";
import {
  MapPin,
  Bed,
  Bath,
  ArrowLeft,
  CheckCircle2,
  Heart,
  ChevronRight,
  ChevronLeft,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaSquare } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const formatPrice = (price: number) => `$${price.toLocaleString()}`;

const PropertyDetailsPage = ({ params }: { params: { id: string } }) => {
  const propertyId = parseInt(params.id);
  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    notFound();
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const galleryImages = [
    {
      url: property.imageUrl,
      alt: `${property.propertyName}`,
    },
    {
      url: property.imageUrl,
      alt: `${property.propertyName}`,
    },
    {
      url: property.imageUrl,
      alt: `${property.propertyName}`,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Get related properties based on similar criteria
  const getRelatedProperties = () => {
    return properties
      .filter(p => p.id !== propertyId) // Exclude current property
      .filter(p => {
        // Find properties with similar characteristics
        const sameBedroomRange = Math.abs(p.bedrooms - property.bedrooms) <= 1;
        const similarPriceRange = Math.abs(p.price - property.price) <= property.price * 0.3;
        const sameState = p.location.split(',').pop() === property.location.split(',').pop();

        return sameBedroomRange && (similarPriceRange || sameState);
      })
      .slice(0, 3); // Limit to 3 related properties
  };

  const relatedProperties = getRelatedProperties();

  return (
    <div className="min-h-screen pb-15 lg:pb-0">
      <div className="bg-white mt-20">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-sm text-rose-600 hover:text-primary transition-colors"
            style={{ letterSpacing: "0.5px" }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Properties
          </Link>

          <Button variant="outline" size="sm" className="bg-white">
            <Heart className="h-4 w-4 text-gray-600" />
            <span className="text-gray-600">Save</span>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="hidden md:grid grid-cols-3 gap-6 h-[480px] lg:h-[520px]">
          <div
            className="col-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={galleryImages[0].url}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1
                className="text-2xl font-medium mb-1"
                style={{ letterSpacing: "0.5px" }}
              >
                {property.propertyName}
              </h1>
              <div className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5" />
                {property.location}
              </div>
            </div>
          </div>

          {/* Two smaller images */}
          <div className="grid grid-rows-2 gap-6">
            {galleryImages.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                onClick={() => openLightbox(index + 1)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-[260px] rounded-2xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-6 right-6 text-white p-3 rounded-full hover:bg-white/10 z-10"
                onClick={closeLightbox}
              >
                <X size={32} />
              </button>

              {/* Navigation arrows */}
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              >
                <ChevronLeft size={40} />
              </button>

              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight size={40} />
              </button>

              {/* Current image */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-6xl h-[85vh] px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[currentIndex].url}
                  alt={galleryImages[currentIndex].alt}
                  fill
                  className="object-contain"
                  quality={90}
                />

                {/* Caption */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-full text-lg font-medium">
                  {property.propertyName} – {galleryImages[currentIndex].alt}
                </div>

                {/* Counter */}
                <div className="absolute bottom-6 right-6 text-white text-lg bg-black/60 px-4 py-2 rounded-full">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-5 border rounded-xl p-6 bg-white shadow-sm"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <div className="col-span-2 sm:col-span-1">
                <div className="text-sm text-gray-500 text-muted-foreground">
                  Price
                </div>
                <div className="text-2xl font-semibold text-black mt-1">
                  {formatPrice(property.price)}
                </div>
              </div>

              <div className="flex flex-col border-l pl-5 sm:pl-8">
                <span className="flex items-center text-muted-foreground text-sm mb-1">
                  <Bed className="w-4 h-4 mr-2 text-gray-600" />
                  <div className="text-sm text-gray-500 text-muted-foreground">
                    Beds
                  </div>
                </span>
                <span className="font-bold text-xl">{property.bedrooms}</span>
              </div>

              <div className="flex flex-col border-l pl-5 sm:pl-8">
                <span className="flex items-center text-muted-foreground text-sm mb-1">
                  <Bath className="w-4 h-4 mr-2 text-gray-600" />
                  <div className="text-sm text-gray-500 text-muted-foreground">
                    Baths
                  </div>
                </span>
                <span className="font-bold text-xl">{property.bathrooms}</span>
              </div>

              <div className="flex flex-col border-l pl-5 sm:pl-8">
                <span className="flex items-center text-muted-foreground text-sm mb-1">
                  <FaSquare className="w-4 h-4 mr-2 text-gray-600" />
                  <div className="text-sm text-gray-500 text-muted-foreground">
                    Square
                  </div>
                </span>
                <span className="font-bold text-xl">
                  {property.size.toLocaleString()}
                </span>
              </div>
            </motion.div>

            <motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2
                className="text-xl font-medium mb-4"
                style={{ letterSpacing: "1px" }}
              >
                About this property
              </h2>
              <div
                className="prose text-gray-600 prose-slate max-w-none dark:prose-invert text-muted-foreground leading-relaxed"
                style={{ letterSpacing: "0.5px" }}
              >
                <p>
                  This stunning {property.propertyName.toLowerCase()} is located
                  in the heart of {property.location}. Featuring{" "}
                  {property.bedrooms} spacious bedrooms and {property.bathrooms}{" "}
                  modern bathrooms, this property offers {property.size} square
                  feet of living space.
                </p>
              </div>
            </motion.section>

            <motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2
                className="text-xl font-medium mb-6"
                style={{ letterSpacing: "1px" }}
              >
                Property Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Modern Kitchen",
                  "Spacious Living Room",
                  "Natural Lighting",
                  "Parking Available",
                  "Air Conditioning",
                  "Security System",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-6 w-6 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                    </div>
                    <span
                      className="text-foreground"
                      style={{ letterSpacing: "0.5px" }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2
                className="text-xl font-medium mb-4"
                style={{ letterSpacing: "1px" }}
              >
                Location
              </h2>
              <div className="bg-slate-200 dark:bg-slate-800 h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                <iframe
                  title={`Map of ${property.location}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    property.location,
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.section>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24">
              <Card className="p-0 pb-5 shadow-lg border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex items-center gap-4">
                    <div>
                      <p
                        className="text-sm text-muted-foreground mb-1"
                        style={{ letterSpacing: "0.5px" }}
                      >
                        Listing Agent
                      </p>
                      <h3
                        className="text-lg font-medium leading-none"
                        style={{ letterSpacing: "0.5px" }}
                      >
                        {property.propertyName}
                      </h3>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 pt-0">
                  <h4
                    className="font-normal mb-4"
                    style={{ letterSpacing: "0.5px" }}
                  >
                    Interested in this property?
                  </h4>

                  <form className="space-y-4">
                    <div className="grid gap-2">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        required
                        style={{ letterSpacing: "0.5px" }}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        required
                        style={{ letterSpacing: "0.5px" }}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        style={{ letterSpacing: "0.5px" }}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Textarea
                        name="message"
                        defaultValue={`Hi Agent, I am interested in ${property.propertyName} at ${property.location}. Please send me more details.`}
                        className="h-32 resize-none"
                        style={{ letterSpacing: "0.5px" }}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-bold bg-black text-white hover:bg-black/80"
                      style={{ letterSpacing: "0.5px" }}
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Properties Section */}
      {relatedProperties.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl font-medium text-gray-800 mb-8 text-center"
                style={{ letterSpacing: "0.5px" }}
              >
                Related Properties
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProperties.map((relatedProperty) => (
                  <motion.div
                    key={relatedProperty.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <Link href={`/property/${relatedProperty.id}`}>
                      <div className="relative h-48 md:h-56 group cursor-pointer">
                        <img
                          src={relatedProperty.imageUrl}
                          alt={relatedProperty.propertyName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sm font-bold text-gray-900">
                            {formatPrice(relatedProperty.price)}
                          </span>
                        </div>
                      </div>
                    </Link>

                    <div className="p-6">
                      <Link href={`/property/${relatedProperty.id}`}>
                        <h3
                          className="text-lg font-semibold text-gray-900 mb-2 hover:text-rose-600 transition-colors cursor-pointer"
                          style={{ letterSpacing: "0.5px" }}
                        >
                          {relatedProperty.propertyName}
                        </h3>
                      </Link>

                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        {relatedProperty.location}
                      </div>

                      <div className="flex items-center justify-between text-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center text-sm">
                            <Bed className="w-4 h-4 mr-1" />
                            {relatedProperty.bedrooms}
                          </div>
                          <div className="flex items-center text-sm">
                            <Bath className="w-4 h-4 mr-1" />
                            {relatedProperty.bathrooms}
                          </div>
                          <div className="flex items-center text-sm">
                            <FaSquare className="w-4 h-4 mr-1" />
                            {relatedProperty.size.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/property"
                  className="inline-flex items-center px-6 py-3 bg-black text-white font-normal rounded-full hover:bg-black/80 transition-colors duration-200"
                  style={{ letterSpacing: "0.5px" }}
                >
                  View All Properties
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}


    </div>
  );
};

export default PropertyDetailsPage;
