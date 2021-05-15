import React, {useState} from 'react';
import { Card, IconButton, } from "@vkontakte/vkui";
import "./PlantCard.scss";
import Icon24MoreHorizontal from "@vkontakte/icons/dist/24/more_horizontal";
import AdditionalOptions from "../../../../../../components/AdditionalOptions/AdditionalOptions";

const PlantCard = ({img, name, description}) => {
    const [additionalOptionsOpen, setAdditionalOptionsOpen] = useState(false);

    return(
        <Card size="l" mode="shadow">
            <div className="card">
                <img src={img} className="card__image"/>
                <div className="card__text">
                    <p className="card__name">
                        {name}
                    </p>
                    <p className="card__description">
                        {description}
                    </p>
                </div>
                <IconButton className="card__menu"><Icon24MoreHorizontal/></IconButton>
                { additionalOptionsOpen &&
                    <AdditionalOptions />
                }
            </div>
        </Card>
    )
}
export default PlantCard;
