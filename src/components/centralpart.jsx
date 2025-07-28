import React, { useEffect, useState } from "react";

const backgrounds = [
  "/images/bg1.jpg",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
];

const CentralPart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section
      className="h-[60vh] text-center px-6 bg-cover bg-center relative transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgrounds[currentIndex]})`,
      }}
    >
      {/* Dark transparent overlay */}
      <div className="absolute inset-0  bg-opacity-20 z-0"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 rounded-lg bg-white/80 text-black shadow-lg backdrop-blur-sm  fontstyle-poppins">
          Discover & Book Your Table Instantly
        </h1>

        <p className="md:text-xl max-w-2xl mx-auto font-semibold px-4 py-2 rounded-lg bg-white/80 text-black shadow-lg backdrop-blur-sm">
          Browse restaurants, check availability, and reserve a table in seconds.
        </p>

        <button className="mt-6 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-md transition duration-300 cursor-pointer">
          Explore Restaurants
        </button>
      </div>
    </section>
  );
};

export default CentralPart;
