import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import Card from "./Card";

const ListTours = () => {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState();

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
      <div className="grid grid-cols-3 gap-14 place-items-center p-10">
        {tours.map((tour) => (
          <Card
            name={tour.name}
            info={tour.info}
            price={tour.price}
            image={tour.image}
          />
        ))}
      </div>
    </>
  );
};

export default ListTours;
