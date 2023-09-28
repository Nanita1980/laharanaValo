import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import db from "../../data/db.json";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import ErrorPage from "../../pages/ErrorPage/ErrorPage"
import { useParams } from "react-router-dom";


const Accommodation = () => {
  const { id } = useParams();
  const housing = db.find((housing) => housing.id === id);
  const tags = housing?.tags;
  const rating = housing?.rating;

  if (housing) {
    
    return (
      <>
        <div className="accommodationPage">
        <Header />
          <div className="containerHousing">
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
  
              <div className="host">
  
                <div className="containerHost">
                  <img
                    className="hostPicture"
                    src={housing.host.picture}
                    alt={housing.host.name}
                  />
                  <p className="hostName">{housing.host.name}</p>
                </div>
                
                <div className="rating">
                  <Rating rating={rating} />
                </div>
  
              </div>
  
            </div>
  
            <div className="accommodationCollapse">
              <div className="displayCollapse">
                <Collapse title="Description" desc={housing.description} />
              </div>
  
              <div className="displayCollapse">
                <Collapse title="Équipements" desc={housing.equipments} />
              </div>
            </div>
  
          </div>
          
        </div>
        <Footer />
      </>
    );
  } else {
      return <ErrorPage />;
    }
 
};

export default Accommodation;