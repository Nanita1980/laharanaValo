import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../data/db.json";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Accommodation from "../../pages/Accommodation/Accommodation"

const AccomCheck = () => {
  const { id } = useParams();
  const [properties] = useState(db);

  const house = properties.find((house) => house.id === id);

  if (house) {
    return <Accommodation id={id} />;
  } else {
      return <ErrorPage />;
    }
};

export default AccomCheck;