import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import Card from "./Card";

const ListTours = () => {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState();

  const handelDelete = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    apiClient
      .get("/react-tours-project")
      .then((res) => setTours(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <h1 className="text-center text-5xl font-bold text-green-500 p-8 pb-3">
        Our Tours
      </h1>
      <div className="w-24 h-1 rounded-sm place-self-center bg-green-600"></div>
      {error && <p>error</p>}
      {tours.length === 0 && (
        <div
          class="p-4 mb-4 text-md text-center mt-5 text-green-800 rounded-lg bg-green-50  dark:text-green-400"
          role="alert"
        >
          <span class="font-medium text-4xl ">No Tours Lift</span>
        </div>
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
