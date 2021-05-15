import React, {useCallback, useState} from 'react';
import { Card, IconButton, } from "@vkontakte/vkui";
import "./PlantCard.scss";
import Icon24MoreHorizontal from "@vkontakte/icons/dist/24/more_horizontal";
import AdditionalOptions from "../../../../../../components/AdditionalOptions/AdditionalOptions";

const PlantCard = ({img, name, description}) => {
    const [additionalOptionsOpen, setAdditionalOptionsOpen] = useState(false);

    const bodyClickListener = useCallback( e => {
        if (e.target.closest('.additional-options') || e.target.classList.contains('additional-options')) {
            return;
        }
        e.stopPropagation();
        clearBodyClickBlocking();
    }, []);

    const onClickAdditionalOptions = e => {
        e.stopPropagation();
        setAdditionalOptionsOpen(true);

        document.addEventListener('click', bodyClickListener, true);
        document.body.classList.add('disable-click');
    }

    const clearBodyClickBlocking = () => {
        setAdditionalOptionsOpen(false);
        document.removeEventListener('click', bodyClickListener, true);
        document.body.classList.remove('disable-click');
    }

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
                <IconButton className="card__menu" onClick={onClickAdditionalOptions}><Icon24MoreHorizontal/></IconButton>
                { additionalOptionsOpen &&
                    <AdditionalOptions clearBodyClickBlocking={clearBodyClickBlocking}/>
                }
            </div>
        </Card>
    )
}
export default PlantCard;
