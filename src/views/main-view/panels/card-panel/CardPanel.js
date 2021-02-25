import React, {Component} from 'react';
import {Card, CardGrid, Group, Title, Text} from "@vkontakte/vkui";
import "./CardPanel.scss";
import { Icon24InfoCircleOutline } from '@vkontakte/icons';

class CardPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <img src={this.props.selectedPlant.img} className="open-card__image" alt="Изображение растения"/>
                <div className="open-card__gradient" />
                <div className="open-card__wrapper">
                    <div className="open-card__header">
                        <Title level="1" weight="bold">{this.props.selectedPlant.name}</Title>
                        <Text style={{ color: 'var(--text_secondary)' }}>Кактус обыкновенный</Text>
                    </div>
                    <Card size="l" mode="shadow" className="open-card__description">
                        <Icon24InfoCircleOutline className="open-card__description_icon"/>
                        <p className="open-card__description_title">Описание</p>
                        <div className="open-card__description_text">
                            Родиной кактусов является Америка. Пустынные кактусы превосходно растут и развиваются в суровых условиях полупустынь, находящихся в Аргентине, Чили, Мексике, Перу и Боливии. Лесные кактусы в природных условиях можно повстречать в тропических джунглях. Пустынные, а также лесные виды кактусов имеют значительные различия, и в связи с этим то, как ухаживать за кактусом, определяется его видом.
                        </div>
                    </Card>
                    <p className="open-card__care">Уход</p>
                    <Card>
                        <div className="open-card__main-season"/>
                    </Card>
                    <Group>
                        <CardGrid size="s" className="open-card__rest-seasons">
                            <Card>
                                <div/>
                            </Card>
                            <Card>
                                <div/>
                            </Card>
                            <Card>
                                <div/>
                            </Card>
                        </CardGrid>
                    </Group>
                </div>
            </>
        );
    }
}

export default CardPanel;