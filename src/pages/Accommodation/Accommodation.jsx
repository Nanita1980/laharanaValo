import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import db from "../../data/db.json";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";

const Accommodation = ({ id }) => {
  const housing = db.find((housing) => housing.id === id);
  const tags = housing.tags;

  return (
    <>
      <div className="accommodationPage">
      <Header />
        <div className="containerHouse">
          <Carousel pictures={housing.pictures} />

          <div className="infos">
            <div className="location">
              <h2 className="housingTitle">{housing.title}</h2>
              <p className="place">{housing.location}</p>

              <div className="tags">
                {tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Accommodation;