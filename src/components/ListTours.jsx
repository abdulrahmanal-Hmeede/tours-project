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
      {error && <p>error</p>}
      <div className="grid grid-cols-3 gap-4 place-items-center">
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
