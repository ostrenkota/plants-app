import React from 'react';
import PlantCard from '../plant-card/PlantCard'

const PlantsList = ({plantsList, onCardClick}) => {
    return(
        <ul>
            {
                plantsList.map(plant =>
                <li onClick={() => onCardClick(plant)}>
                    <PlantCard
                        img={plant.img}
                        name={plant.name}
                        description={plant.description}
                    />
                </li>
                )
            }
        </ul>
    )
}

export default PlantsList;