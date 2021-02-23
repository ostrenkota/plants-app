import React from 'react';
import PlantCard from '../plant-card/PlantCard'

const PlantsList = ({plantsList}) => {
    return(
        <ul>
            {
                plantsList.map(plant =>
                <li>
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