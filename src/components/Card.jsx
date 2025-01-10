import React, { useState } from "react";

const Card = ({ id, name, info, price, image, handelDelete }) => {
  const [exp, setExp] = useState(false);

  return (
    <>
      <div class="relative rounded overflow-hidden shadow-lg transition ease-in-out hover:scale-105 bg-white w-full h-full">
        <img className="w-full" src="" alt="" />
        <div class="absolute top-2 right-2 bg-green-500 text-white font-bold px-3 py-1 rounded-full text-sm">
          {price}
        </div>
        <img className="w-full h-80" src={image} alt="" />
        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">{name}</h2>
          <p class="text-gray-700 text-base">
            {exp ? info : info.substring(0, 200)}
            <button
              className="text-green-400 font-bold"
              onClick={() => setExp(!exp)}
            >
              {exp ? " less" : " ...more"}
            </button>
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <button
            className="transition ease-in-out text-sm w-full  bg-gray-200 text-gray-800 py-2 rounded hover:bg-green-300"
            onClick={() => handelDelete(id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
