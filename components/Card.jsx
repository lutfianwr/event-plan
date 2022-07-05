import React from 'react';
import { BsCart } from 'react-icons/bs';

function Card(props) {
  return (
    <div>
      <div className="container grow p-7   flex flex-col bg-white max-w-sm mx-auto rounded-md  text-black border-2 shadow-lg border-black">
        <div className="cursor-pointer h-full flex flex-col justify-between " onClick={props.onClickItem}>
          <img className="max-w-full  h-auto" width="500" height="750" src={props.image} alt={props.image} />
          <div className="">
            <p className="mt-2">{props.title}</p>
            <div className="text-center text-lg font-semibold  ">
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
