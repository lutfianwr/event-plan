import React from "react";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import axios from "axios";

const CreateEvent = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchEven();
  }, []);

  const fetchEven = () => {
    axios
      .get(
        `https://virtserver.swaggerhub.com/iswanulumam/EventPlanningApp/1.0.0/events`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        // handle success
        console.log(response);
        const results = response.data.data;
        setProduct(results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <Layout>
      <h1 className="text-2xl font-bold xl:ml-28 pt-5">Create Event</h1>
      <div className="flex justify-center p-10">
        <form className="border-2 border-grey-600 p-10 mx-16 mb-5 w-full bg-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col col-span-2">
              <p className="font-bold">Basic Info</p>
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">Event Title</label>
              <input
                type="text"
                id="event-title"
                name="event-title"
                className="form-input px-3 py-2 rounded-md border-2 border-grey-600"
                required
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">
                <div className="flex align-items">
                  Event Description
                  <span className="ml-auto opacity-75">
                    Max. 500 characters
                  </span>
                </div>
              </label>
              <textarea
                maxLength="500"
                rows="4"
                type="text"
                id="description"
                name="description"
                className="form-input px-3 py-2 rounded-md border-2 border-grey-600"
                required
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="first-name">Event Benner</label>
              <div className="flex shrink">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="form-input px-3 py-2 rounded-md border-2 border-grey-600"
                  required
                />
                <button
                  type="submit"
                  className="bg-red-300 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-red-500 hover:bg-red-700"
                >
                  Browse File
                </button>
              </div>
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="first-name">Quota</label>
              <div className="flex shrink">
                <input
                  type="text"
                  id="Quota"
                  name="Quota"
                  className="form-input px-3 py-2 rounded-md border-2 border-grey-600"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col col-span-2">
              <p className="font-bold">Location</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="first-name">Longitude</label>
              <input
                type="text"
                id="longitude"
                name="longitude"
                className="form-input px-3 py-2 rounded-md border-2 border-grey-600"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name">Latitude</label>
              <input
                type="text"
                id="latidute"
                name="latidute"
                className="form-input px-3 py-2 rounded-md border-2 border-grey-600"
                required
              />
            </div>
            <div className="flex flex-col col-span-2">
              <p className="font-bold">Date & Time</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Date</label>
              <input
                type="text"
                id="date"
                name="date"
                className="form-input px-3 py-2 rounded-md border-2 border-grey-600"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Time</label>
              <input
                type="text"
                id="time"
                name="time"
                className="form-input px-3 py-2 rounded-md border-2 border-grey-600"
                required
              />
            </div>
          </div>
          <div className="flex justify-end py-4">
            <button
              type="submit"
              className="bg-red-300 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-red-500 hover:bg-red-700"
            >
              create my event
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateEvent;
