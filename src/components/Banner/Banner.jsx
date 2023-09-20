import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Banner() {
  const [aboutPage, setAboutPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setAboutPage(true);
    }
  }, [location.pathname]);

  return (
    <div className="banner">
      <section className={aboutPage ? "bannerAbout" : "bannerHome"}>
        {!aboutPage && <h1 className="bannerText" >Chez vous, partout et ailleurs</h1>}
      </section>
    </div>
  );
}