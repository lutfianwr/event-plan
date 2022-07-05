import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg">
            <h1 className="text-xl font-roboto font-bold tracking-wide  text-gray-800  lg:text-4xl">Scarva</h1>
            <p className="mt-4  text-gray-600">Scarva merupakan platform jual dan beli sepatu terbaik dan terpercaya di indonesia. Kami menjamin keaslian semua Sneakers yang anda beli atau uang anda kembali.</p>
            <div className="mt-6"></div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
          <img className="object-cover w-full max-w-2xl rounded-md lg:h-full" src="https://s0.bukalapak.com/uploads/content_attachment/fb91fb2b037ee71dacef78b5/w-740/puma-thunder-spectra-burgundy-black-release-1.jpg" alt="sepatu" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
