import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Properties from "../../components/Properties/Properties";

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <Header />
        <Banner />
        <Properties />
      </div>
      
      <Footer />
    </>
  );
};

export default Home;