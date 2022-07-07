import React from 'react';
import CardEvent from '../components/CardEvent';
import Layout from '../components/layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { Route } from '@mui/icons-material';
import { useRouter } from 'next/router';

const MyEvent = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [remove, setRemove] = useState([]);
  const router = useRouter();

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

  const handleRemove = (id) => {
    axios
      .delete(`http://3.86.179.206:80/events/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((response) => {
        // handle success
        console.log(response);
        const results = response.data;
        setRemove(results);
        swal({
          title: 'Good job!',
          text: 'SUKSES DELETE DATA',
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
        myEvent();
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
          {event.map((item) => (
            <CardEvent key={item.id} title={item.event_name} location={item.category} image={item.image} date={item.date} onClick={() => handleRemove(item.id)} onClickEdit={() => router.push(`edit/${item.id}`)} />
          ))}
        </div>
      </Layout>
    );
  }
};

export default MyEvent;
