import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";


const Home = () => {
  return (
    <>
      <div className="containerHome">
        <Header />
        <Banner />
      </div>
      
      <Footer />
    </>
  );
};

export default Home;