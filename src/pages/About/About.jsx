import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {

  const aboutContent = [
    {
      id: "about1",
      title: "Fiabilité",
      desc: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: "about2",
      title: "Respect",
      desc: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: "about3",
      title: "Service",
      desc: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: "about4",
      title: "Sécurité",
      desc: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <div className="containerAbout">
        <Header />
        <Banner />
        <ul className="displayABout">
          {aboutContent.map((content) => (
            <Collapse
              key={content.id}
              title={content.title}
              desc={content.desc}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default About;