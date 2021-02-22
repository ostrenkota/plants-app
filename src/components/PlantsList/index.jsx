import React, {Fragment} from "react";
import Plant from "../Plant";
import "./PlantsList.scss";

const PlantsList = ({ filter, plantsList, showImage, infoBox }) => {

    return(
        <div className="plants-list">
            {
                plantsList
                    .filter(plant => !filter || plant.name.toLowerCase().includes(filter.toLowerCase()))
                    .map(plant => <Plant key={plant.id} {...plant} showImage={showImage} infoBox={infoBox} />)
            }
        </div>
    );
};

export default PlantsList;