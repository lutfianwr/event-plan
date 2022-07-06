import React from 'react';
import CardEvent from '../components/CardEvent';
import Layout from '../components/layout';
import axios from 'axios';
import { useState, useEffect } from 'react';

const MyEvent = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [remove, setRemove] = useState([]);

  useEffect(() => {
    myEvent();
  }, []);

  const myEvent = () => {
    axios
      .get(`http://3.86.179.206:80/my-events`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((response) => {
        // handle success
        console.log(response);
        const results = response.data.data;
        setEvent(results);
      })
      .catch(function (error) {
        // handle error
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
        <div className="flex justify-center p-10">
          <CardEvent></CardEvent>
        </div>
      </Layout>
    );
  }
};

export default MyEvent;
