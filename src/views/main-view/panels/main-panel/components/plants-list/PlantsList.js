import React from 'react';
import PlantCard from '../plant-card/PlantCard'

const PlantsList = ({plantsList, onCardClick}) => {
    return(
        <ul>
            {
                plantsList?.map?.(plant =>
                <li
                    onClick={() => onCardClick(plant)}
                    key={plant.id}
                >
                    <PlantCard
                        plant={plant}
                    />
                </li>
                )
            }
        </ul>
    )
}

export default PlantsList;
