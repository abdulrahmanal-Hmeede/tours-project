import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import Card from "./Card";

const ListTours = () => {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState();

  const handelDelete = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const getData = () => {
    apiClient
      .get("/react-tours-project")
      .then((res) => setTours(res.data))
      .catch((err) => setError(err.message));
  };

  const handelRefresh = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-center text-5xl font-bold text-green-500 p-8 pb-3">
        Our Tours
      </h1>
      <div className="w-24 h-1 rounded-sm place-self-center bg-green-600"></div>
      {error && (
        <div
          class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Danger alert!</span> Change a few things
            up and try submitting again.
          </div>
        </div>
      )}
      {tours.length === 0 && (
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
      )}
      <div className="grid grid-cols-3 gap-14 place-items-center p-10">
        {tours.map((tour) => (
          <Card
            id={tour.id}
            name={tour.name}
            info={tour.info}
            price={tour.price}
            image={tour.image}
            handelDelete={handelDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ListTours;
