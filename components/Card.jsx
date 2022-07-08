import React from "react";
import { BsCart } from "react-icons/bs";

function Card(props) {
  return (
    <div className="flex justify-center mx-10 mb-5">
      <div className="container grow flex flex-col bg-white max-w-sm mx-auto rounded-md  text-black border-1 shadow-lg mb-3 mt-3">
        <div
          className="cursor-pointer h-full flex flex-col justify-between "
          onClick={props.onClickItem}
        >
          <img
            className="max-w-full  h-auto"
            width="500"
            height="750"
            src={props.image}
            alt={props.image}
          />
          <div className="px-3 py-2">
            <p className="mt-2 text-bold">{props.title}</p>
            <div className="text-center md:text-lg md:font-semibold  ">
              <p className="">{props.date}</p>
              <p className="">{props.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
