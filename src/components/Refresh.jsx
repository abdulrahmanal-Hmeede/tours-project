import React from "react";

const Refresh = ({ handelRefresh }) => {
  return (
    <>
      <div className="flex flex-col">
        <div
          class="p-4 mb-4 text-md text-center mt-5 text-green-800 rounded-lg bg-green-50  dark:text-green-400"
          role="alert"
        >
          <span class="font-medium text-4xl ">No Tours Lift</span>
        </div>
        <button
          className="transition ease-in-out bg-green-500 w-24 place-self-center text-white p-2 rounded-md hover:bg-green-600"
          onClick={() => handelRefresh()}
        >
          Refresh
        </button>
      </div>
    </>
  );
};

export default Refresh;
