import React from "react";
import CardEvent from "../components/CardEvent";
import Layout from "../components/layout";

const myEvent = () => {
  return (
    <Layout>
      <div className="flex justify-center p-10">
        <CardEvent></CardEvent>
      </div>
    </Layout>
  );
};

export default myEvent;
