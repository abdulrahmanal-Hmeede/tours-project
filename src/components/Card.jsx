import React from "react";

const Card = ({ name, info, price, image }) => {
  return (
    <>
      <div class="relative max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src="" alt="" />
        <div class="absolute top-2 right-2 bg-green-500 text-white font-bold px-3 py-1 rounded-full text-sm">
          {price}
        </div>
        <img className="w-full h-80" src={image} alt="" />
        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">{name}</h2>
          <p class="text-gray-700 text-base">{info}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <button class="text-sm w-full bg-gray-200 text-gray-800 py-2 rounded">
            Not Interested
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
