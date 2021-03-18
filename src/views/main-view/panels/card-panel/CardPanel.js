import React, {Component} from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";
import "./CardPanel.scss";
import { Icon24InfoCircleOutline } from '@vkontakte/icons';
import CareBlock from "./components/care-block/CareBlock";
import { Icon28ArrowLeftOutline } from '@vkontakte/icons';
import WateringBlock from "./components/watering-block/WateringBlock";

class CardPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Button mode="tertiary" className="open-card__back" onClick={this.props.onBackClick}><Icon28ArrowLeftOutline/></Button>
                <img src={this.props.selectedPlant.img} className="open-card__image" alt="Изображение растения"/>
                <div className="open-card__gradient" />
                <div className="open-card__wrapper">
                    <div className="open-card__header">
                        <Title level="1" weight="bold" className="open-card__title">{this.props.selectedPlant.name}</Title>
                        <Text style={{ color: 'var(--text_secondary)' }} className="open-card__subtitle">Кактус обыкновенный</Text>
                    </div>
                    <Card size="l" mode="shadow" className="plant-description">
                        <Icon24InfoCircleOutline className="plant-description__icon"/>
                        <p className="plant-description__title">Описание</p>
                        <div className="plant-description__text">
                            Родиной кактусов является Америка. Пустынные кактусы превосходно растут и развиваются в суровых условиях полупустынь, находящихся в Аргентине, Чили, Мексике, Перу и Боливии. Лесные кактусы в природных условиях можно повстречать в тропических джунглях. Пустынные, а также лесные виды кактусов имеют значительные различия, и в связи с этим то, как ухаживать за кактусом, определяется его видом.
                        </div>
                    </Card>
                    <CareBlock />
                    <WateringBlock/>
                </div>
            </>
        );
    }
}

export default CardPanel;