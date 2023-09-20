import React, { useState } from 'react';
import logements from "../../data/db.json"
import Card from '../Card/Card';

const Properties = () => {
    const [dataProperties] = useState(logements);

    return (
      <div className="containerProperties">
        <ul className="containerCards">
          {dataProperties.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </ul>
      </div>
    );
};

export default Properties;