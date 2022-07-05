import React, { useState, useEfect } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="h-screen w-full overflow-auto">
      <div className="">
        <Head>
          <title>Pokemon App</title>
          <meta name="description" content="pokemon catcher app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Header></Header>
          <div className="bg-slate-200 h-screen"> {props.children}</div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};
export default Layout;
