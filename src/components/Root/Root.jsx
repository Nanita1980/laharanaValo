import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
// import AccomCheck from '../AccomCheck/AccomCheck';
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import Accommodation from '../../pages/Accommodation/Accommodation';

const Root = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/logement/:id" element={<Accommodation />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>
      </BrowserRouter>
  );
};

export default Root;