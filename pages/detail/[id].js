import React from "react";
import Layout from "../../components/layout";
import Attendees from "../../components/Attendees";
import CommentForms from "../../components/CommentForms";
import CommentList from "../../components/CommentList";
import Map from "../../components/Map";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Detail = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getComments();
  }, []);

  const fetchData = async (props) => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(`http://3.86.179.206:80/events/${id}`, requestOptions)
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

  const getComments = async (props) => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(`http://3.86.179.206:80/comments/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setComments(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const postComment = async (props) => {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },

      body: JSON.stringify({
        comment: commentInput,
      }),
    };
    await fetch(`http://3.86.179.206:80/comments/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getComments();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        //setLoading(false);
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
        <div className="bg-white h-full p-5 lg:px-20">
          <div className="bg-white">
            <div className="hero flex justify-center w-full">
              <div className=" flex flex-col lg:flex-row">
                <img
                  className=" w-full lg:w-96 h-auto object-cover"
                  src={event.data.image}
                  alt=""
                />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 text-s pb-5 lg:pb-10"></p>

                    <h5 className="text-gray-900 text-xl font-medium pb-2 lg:pb-5">
                      {event.data.event_name}
                    </h5>

                    <p className="text-gray-600 text-xs">Hosted by</p>
                    <p className="text-gray-900 text-s pb-2 lg:pb-5">
                      {event.data.user.name}
                    </p>
                    <p className="text-gray-600 text-s pb-2">
                      {event.data.category}
                    </p>
                    <p className="text-gray-600 text-xs pb-6">
                      quota {event.data.quota} persons
                    </p>
                  </div>

                  <div className="">
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="w-full px-6 py-2.5 bg-[#FF9900] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
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
                {event.data.description}
              </div>
              <div className="DayTime">
                <div className="font-medium">Date & Time</div>
                <div className="location mb-5"> {event.data.date}</div>
                <div className="font-medium pb-10">{event.data.time}</div>
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
              <CommentForms
                onChange={(e) => setCommentInput(e.target.value)}
                submitComment={() => postComment()}
              />

              {comments.map((comment) => (
                <CommentList
                  key={comment.id}
                  comment={comment.comment}
                  name={comment.name}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Detail;
