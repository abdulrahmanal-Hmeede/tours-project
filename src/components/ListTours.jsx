import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import Card from "./Card";
import AlertError from "./AlertError";
import Loading from "./Loading";

const ListTours = () => {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const handelDelete = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const getData = () => {
    apiClient
      .get("/react-tours-project")
      .then((res) => {
        setTours(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handelRefresh = () => {
    setLoading(true);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {error && <AlertError />}
      {tours.length === 0 && !error && (
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
      {loading && <Loading />}
      <>
        {tours.length >= 1 && (
          <>
            <h1 className="text-center text-5xl font-bold text-green-500 p-8 pb-3">
              Our Tours
            </h1>
            <div className="w-24 h-1 rounded-sm place-self-center bg-green-600"></div>
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
        )}
      </>
    </>
  );
};

export default ListTours;
