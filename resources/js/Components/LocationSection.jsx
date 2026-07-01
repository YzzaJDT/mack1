// resources/js/Components/LocationSection.jsx

import React from "react";

const locations = [
  {
    name: "Jacksonville",
    image: "https://source.unsplash.com/800x600/?jacksonville,friendship-fountain",
  },
  {
    name: "Miami",
    image: "https://source.unsplash.com/800x600/?miami,south-beach",
  },
  {
    name: "Orlando",
    image: "https://source.unsplash.com/800x600/?orlando,cinderella-castle",
  },
  {
    name: "Tampa",
    image: "https://source.unsplash.com/800x600/?tampa,bayshore-boulevard",
  },
  {
    name: "Tallahassee",
    image: "https://source.unsplash.com/800x600/?tallahassee,florida-state-capitol",
  },
  {
    name: "St. Petersburg",
    image: "https://source.unsplash.com/800x600/?st-petersburg,the-dali-museum",
  },
  {
    name: "Hialeah",
    image: "https://source.unsplash.com/800x600/?hialeah,hialeah-park",
  },
  {
    name: "Fort Lauderdale",
    image: "https://source.unsplash.com/800x600/?fort-lauderdale,las-olas-boulevard",
  },
];

export default function LocationSection() {
  return (
    <div className="bg-gray-100 px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300"></div>

            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold transition duration-300 group-hover:-translate-y-1">
              {loc.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}