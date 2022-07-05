import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Home(props) {
  // const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  const event = props.data;

  // const fetchProduct = async () => {
  //   await axios
  //     .get(
  //       `
  //       https://my-json-server.typicode.com/Maruta45/mockjson/events
  //     `
  //     )
  //     .then((response) => {
  //       // handle success

  //       console.log(response.data);
  //       const results = response.data;
  //       setEvent(results);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(() => setLoading(false));
  // };

  return (
    <div className={styles.container}>
      <Layout>
        <Hero />
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-2 gap-3">
          {event.map((item) => (
            <Card
              key={item.id}
              title={item.event.name}
              location={item.event.location}
              image={item.event.image}
              date={item.event.date}
              onClickItem={() => navigate(`detail/${item.id}`)}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch(
    `https://my-json-server.typicode.com/Maruta45/mockjson/events`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
