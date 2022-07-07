import React from "react";

const CardEvent = (props) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center mb-5">
      <div className="h-52 lg:h-auto lg:w-72 flex-none lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-y-2 border-l-2 border-gray-400">
        <img src={props.image} alt="img" />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-gray-700 text-base">{props.date}</p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {props.title}
          </div>
          <p className="text-gray-700 text-base">{props.location}</p>

          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 mr-3 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#FF9900] hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            onClick={props.onClickEdit}
          >
            Edit
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 mr-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={props.onClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
