import React from 'react';
import Layout from '../../components/layout';
import { useState } from 'react';
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import axios from 'axios';

const EditEvent = () => {
  const [description, setDescription] = useState('');
  const [event_name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quota, setQuota] = useState();
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [objSubmit, setObjSubmit] = useState('');
  const router = useRouter();
  const { editEvent } = router.query;

  const addEvent = (e) => {
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    e.preventDefault();
    axios({
      method: 'put',
      url: `http://3.86.179.206:80/events/${editEvent}`,
      data: formData,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {
        // handle success
        console.log(response);
        swal('Good job!', 'Sukses Edit ', 'success');
        router.push('/');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .finally(() => setLoading(false));
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold xl:ml-28 pt-5">Create Event</h1>
      <div className="flex justify-center p-10">
        <form className="border-2 border-grey-600 p-10 mx-16 mb-5 w-full bg-white" onSubmit={(e) => addEvent(e)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col col-span-2">
              <p className="font-bold">Basic Info</p>
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">Event Title</label>
              <input type="text" id="event-title" name="event-title" className="form-input px-3 py-2 rounded-md border-2 border-grey-600" onChange={(e) => handleChange(e.target.value, 'event_name')} />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">
                <div className="flex align-items">
                  Event Description
                  <span className="ml-auto opacity-75">Max. 500 characters</span>
                </div>
              </label>
              <input maxLength="500" rows="4" type="text" id="description" name="description" className="form-input px-3 py-2 rounded-md border-2 border-grey-600" onChange={(e) => handleChange(e.target.value, 'description')} />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="first-name">Event Benner</label>
              <div className="flex shrink">
                <input
                  type="file"
                  id="first-name"
                  name="first-name"
                  className="form-input px-3 py-2 rounded-md border-2 border-grey-600"
                  accept={'image'}
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                    handleChange(e.target.files[0], 'image');
                  }}
                />
                <button type="submit" className="bg-red-300 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-red-500 hover:bg-red-700">
                  Browse File
                </button>
              </div>
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="first-name">Quota</label>
              <div className="flex shrink">
                <input type="text" id="quota" name="quota" className="form-input px-3 py-2 rounded-md border-2 border-grey-600" onChange={(e) => handleChange(e.target.value, 'quota')} />
              </div>
            </div>
            <div className="flex flex-col col-span-2">
              <p className="font-bold">Location</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="first-name">Categori</label>
              <input type="text" id="category" name="category" className="form-input px-3 py-2 rounded-md border-2 border-grey-600" onChange={(e) => handleChange(e.target.value, 'category')} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name">Latitude</label>
              <input type="text" id="latidute" name="latidute" className="form-input px-3 py-2 rounded-md border-2 border-grey-600" />
            </div>
            <div className="flex flex-col col-span-2">
              <p className="font-bold">Date & Time</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Date</label>
              <input type="text" id="date" name="date" className="form-input px-3 py-2 rounded-md border-2 border-grey-600" onChange={(e) => handleChange(e.target.value, 'date')} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Time</label>
              <input type="text" id="time" name="time" className="form-input px-3 py-2 rounded-md border-2 border-grey-600" onChange={(e) => handleChange(e.target.value, 'time')} />
            </div>
          </div>
          <div className="flex justify-end py-4">
            <button type="submit" className="bg-red-300 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-red-500 hover:bg-red-700">
              Edit Slur
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditEvent;
