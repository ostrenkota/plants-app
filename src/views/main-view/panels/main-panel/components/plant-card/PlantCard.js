import React from 'react';
import { Card, IconButton, } from "@vkontakte/vkui";
import "./PlantCard.scss";
import Icon24MoreHorizontal from "@vkontakte/icons/dist/24/more_horizontal";

const PlantCard = ({img, name, description}) => {

    return(
        <Card size="l" mode="shadow">
            <div className="card">
                <img src={img} className="card__image"/>
                <div className="card__text">
                    <p className="card__text_name">
                        {name}
                    </p>
                    <p className="card__text_description">
                        {description}
                    </p>
                </div>
                <IconButton className="card__menu"><Icon24MoreHorizontal/></IconButton>
            </div>
        </Card>
    )
}
export default PlantCard;