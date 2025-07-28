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
  className="h-[50vh] text-center text-black px-6 bg-cover bg-center relative transition-all duration-1000 ease-in-out text-2xl"
  style={{
    backgroundImage: `url(${backgrounds[currentIndex]})`,
  }}
>
  {/* Dark overlay */}
  <div className=" inset-0  bg-opacity-60 z-0"></div>

  <div className="relative z-10 flex flex-col justify-center items-center h-full">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Discover & Book Your Table Instantly
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Browse restaurants, check availability, and reserve a table in seconds.
    </p>
    <button className="mt-6 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-md transition duration-300">
      Explore Restaurants
    </button>
  </div>
</section>

  );
};

export default CentralPart;
