import React from "react";
import "./Plant.scss";

const Plant = ({ id, name, description, img, showImage, infoBox }) => {
    const plantClickHandler = () => infoBox(id);

    return(
        <div className="plant-card" onClick={plantClickHandler}>
            {showImage ? <img src={img} alt=""/> : ""}
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="plant-card__footer" />
        </div>
    );
};

export default Plant;