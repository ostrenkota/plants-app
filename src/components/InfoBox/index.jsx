import React from "react";
import "./InfoBox.scss";

const InfoBox = ({ name, description, place }) => {
  return(
      <div className="info-container">
          <h3> {name} </h3>
          <p>{description}</p>
          <p>Место: {place}</p>
      </div>
  );
};

export default InfoBox;