import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F4DBB4]">
      <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg">
            <h1 className="text-xl text-center font-roboto font-bold tracking-wide  text-orange-700  lg:text-4xl">
              Menghubungkan Setiap Orang Dimana Saja
            </h1>
            <div className="mt-6"></div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
          <img
            className="object-cover w-full max-w-2xl rounded-md lg:h-full"
            src="https://www.pngarts.com/files/1/Event-PNG-Photo.png"
            alt="event"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
