import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Banner() {
  const [wherePage, setWherePage] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setWherePage(true);
    }
  }, [location.pathname]);

  return (
    <div className="banner">
      <section className={wherePage ? "bannerAbout" : "bannerHome"}>
        {!wherePage && <h1 className="bannerText" >Chez vous, partout et ailleurs</h1>}
      </section>
    </div>
  );
}