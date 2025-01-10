import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import Card from "./Card";

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
      {error && (
        <div
          class="mt-5 flex items-center justify-center text-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400"
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

          {loading && (
            <div role="status" className="flex justify-center m-12">
              <svg
                aria-hidden="true"
                class="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          )}
        </>
      )}
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
