import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { useRouter } from "next/router";

export default function Home(props) {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("https://group3.altaproject.online/events", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data.data);
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
        <Hero />
        <h1 className="text-2xl font-bold md:ml-12 pt-5">Event</h1>
        {console.log(event)}
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-2">
          {event.map((item) => (
            <Card
              key={item.id}
              title={item.event_name}
              location={item.category}
              image={item.image}
              date={item.date}
              onClickItem={() => router.push(`/detail/${item.id}`)}
            />
          ))}
        </div>
      </Layout>
    );
  }
}
