import React, {Component} from 'react';
import {Card, CardGrid, Group} from "@vkontakte/vkui";
import "./CareBlock.scss";
import { Icon20WaterDropOutline, Icon20PlaceOutline } from '@vkontakte/icons';

import Autumn from '../../../../../resources/images/Autumn.jpg';
import Spring from '../../../../../resources/images/Spring.jpg';
import Winter from '../../../../../resources/images/Winter.jpg';
import Summer from '../../../../../resources/images/Summer.jpg';

const SEASONS = [
    {
        name: 'Зима',
        img: Winter
    },
    {
        name: 'Весна',
        img: Spring
    },
    {
        name: 'Лето',
        img: Summer
    },
    {
        name: 'Осень',
        img: Autumn
    }
]

function getCurrentSeason() {
    let month = new Date().getMonth();
    let season = '';
    switch (month) {
        case '11':
        case '1':
        case '0':
            season = 0;
            break;
        case '3':
        case '4':
        case '2':
            season = 1;
            break;
        case '6':
        case '7':
        case '5':
            season = 2;
            break;
        case '9':
        case '10':
        case '8':
            season = 3;
            break;
    }
    return season;
}
    class CareBlock extends Component {
        constructor(props) {
            super(props);

            this.state = {
                selectedSeasonIndex: getCurrentSeason()
            }
        }

        onSeasonClick = selectedSeason => {
            setTimeout(() =>
                    this.setState({
                        selectedSeasonIndex: SEASONS.indexOf(selectedSeason)
                    }),
                150
            );
        }

        render() {
            const orderedSeasons = Object.keys(SEASONS)
                .map(id => +id + this.state.selectedSeasonIndex)
                .map(id => id % SEASONS.length)
                .map(index => SEASONS[index])
            return (
                <div>
                    <p className="title">Уход</p>
                    <CardGrid size="l">
                        <Card className="care-card">
                            <div className="care-card__wrapper">
                                <img src={orderedSeasons[0].img} alt="" className="care-card__image"/>
                                <div className="care-card__content">
                                    <div className="care-card__title">
                                        {orderedSeasons[0].name}
                                    </div>
                                    <ul className="care-card__info">
                                        <li className="care-card__watering">
                                            <Icon20WaterDropOutline className="care-card__icon"/>
                                            <p>Полив раз в 1-2 дня</p>
                                        </li>
                                        <li className="care-card__place">
                                            <Icon20PlaceOutline className="care-card__icon"/>
                                            <p>Расположить на балконе у окна</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </CardGrid>
                    <Group>
                        <CardGrid size="s">
                            <Card className="closed-card" onClick={() => this.onSeasonClick(orderedSeasons[1])}>
                                <div style={{paddingBottom: '92%'}} className="closed-card__wrapper">
                                    <img src={orderedSeasons[1].img} alt="" className="closed-card__image"/>
                                    <div className="closed-card__name">{orderedSeasons[1].name}</div>
                                </div>
                            </Card>
                            <Card className="closed-card" onClick={() => this.onSeasonClick(orderedSeasons[2])}>
                                <div style={{paddingBottom: '92%'}} className="closed-card__wrapper">
                                    <img src={orderedSeasons[2].img} alt="" className="closed-card__image"/>
                                    <div className="closed-card__name">{orderedSeasons[2].name}</div>
                                </div>
                            </Card>
                            <Card className="closed-card" onClick={() => this.onSeasonClick(orderedSeasons[3])}>
                                <div style={{paddingBottom: '92%'}} className="closed-card__wrapper">
                                    <img src={orderedSeasons[3].img} alt="" className="closed-card__image"/>
                                    <div className="closed-card__name">{orderedSeasons[3].name}</div>
                                </div>
                            </Card>
                        </CardGrid>
                    </Group>
                </div>
            );
        }
    }
export default CareBlock;