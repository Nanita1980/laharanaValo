import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="containerError">
        <Header />
        <div className="allErrorText">
          <span className="errorTitle">404</span>
          <p className="errorText">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className="errorLink">
            <button className="errorLinkBtn">
              Retourner sur la page d'accueil
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;