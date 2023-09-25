import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import db from "../../data/db.json";
import Carousel from "../../components/Carousel/Carousel";

const Accommodation = ({ id }) => {
  const housing = db.find((housing) => housing.id === id);

  return (
    <>
      <div className="accommodationPage">
      <Header />
        <div className="containerHouse">
          <Carousel pictures={housing.pictures} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Accommodation;