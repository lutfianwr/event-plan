import React from "react";

const CardEvent = () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="h-52 lg:h-auto lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img
          src="https://nzxt.com/assets/cms/34299/1626207059-starterpc3-white-2000x2000-hero.png?fit=crop&fm=jpg&h=1000&w=1000"
          alt="Shoes"
        />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-gray-700 text-base">Thud, 7 jul 4.00 pm</p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            Komunitas Bali creative writing workshop
          </div>
          <p className="text-gray-700 text-base">Bali - online</p>
          <p className="text-gray-700 text-base">20 Atendents</p>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 mr-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Edit
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 mr-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
