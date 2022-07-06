import React from 'react';
import Layout from '../../components/layout';
import Attendees from '../../components/Attendees';
import CommentForms from '../../components/CommentForms';
import CommentList from '../../components/CommentList';
import Map from '../../components/Map';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Detail() {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const { detail } = router.query;
    console.log(detail);
    fetch(`https://my-json-server.typicode.com/Maruta45/mockjson/events/${detail}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvent(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (loading) {
    return (
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    );
  } else {
    return (
      <Layout>
        <div className="bg-red-200 h-full p-5 lg:px-20">
          <div className="bg-white">
            <div className="hero flex justify-center w-fit">
              <div className=" flex flex-col lg:flex-row">
                <img
                  className=" w-full h-auto object-cover"
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/australia-day-club-event-video-banner-design-template-956e38b1e34f16e4fe55fb23f1084457_screen.jpg?ts=1577355840"
                  alt=""
                />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 text-s pb-5 lg:pb-10">26 January 2022</p>

                    <h5 className="text-gray-900 text-xl font-medium pb-2 lg:pb-5">Australia Day Live Music DJ</h5>

                    <p className="text-gray-600 text-xs">Hosted by</p>
                    <p className="text-gray-900 text-s pb-2 lg:pb-5">Sydney Club</p>
                    <p className="text-gray-600 text-s pb-6">Australia</p>
                  </div>

                  <div className="">
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="w-full px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() => console.log(router.query)}
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="desc flex flex-col lg:flex-row p-10">
              <div className="pb-10 lg:w-3/4 lg:pr-10">
                Australia Day is the official national day of Australia. Observed annually on 26 January, it marks the 1788 landing of the First Fleet at Sydney Cove and raising of the Union Flag by Arthur Phillip following days of
                exploration of Port Jackson in New South Wales. In present-day Australia, celebrations aim to reflect the diverse society and landscape of the nation and are marked by community and family events, reflections on Australian
                history, official community awards and citizenship ceremonies welcoming new members of the Australian community.{' '}
              </div>
              <div className="DayTime">
                <div className="font-medium">Date & Time</div>
                <div className="location mb-5">July 15, 2022, 10:00 PM</div>
                <div className="font-medium">Location</div>
                <div className="location  mb-5">Australia</div>
                <a href="#map" className="">
                  view map
                </a>
              </div>
            </div>
            <div className="attendees px-10 ">
              <div className="font-medium">Attendees</div>
              <div className="flex">
                <Attendees></Attendees>
                <Attendees></Attendees>
                <Attendees></Attendees>
                <Attendees></Attendees>
              </div>
            </div>

            <div>
              <CommentForms></CommentForms>
              <CommentList></CommentList>
            </div>
            <Map></Map>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Detail;
