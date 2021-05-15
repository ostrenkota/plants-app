import React, {Component} from 'react';
import {Card, Title, Text, Button} from "@vkontakte/vkui";
import "./CardPanel.scss";
import { Icon24InfoCircleOutline } from '@vkontakte/icons';
import CareBlock from "./components/care-block/CareBlock";
import { Icon28ArrowLeftOutline } from '@vkontakte/icons';
import WateringBlock from "./components/watering-block/WateringBlock";
import NotesBlock from "./components/notes-block/NotesBlock";
import plantsApi from "../../../../core/axios/api/plantsApi";

class CardPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plantInfo: { }
        }
    }

    async componentDidMount() {
        const plantInfo = await plantsApi.getPlantInfo(this.props.selectedPlant.plantId);
        this.setState({
            plantInfo: plantInfo || {}
        });
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
                        <Text style={{ color: 'var(--text_secondary)' }} className="open-card__subtitle">{this.state.plantInfo?.label || ''}</Text>
                    </div>
                    <Card size="l" mode="shadow" className="plant-description">
                        <Icon24InfoCircleOutline className="plant-description__icon"/>
                        <p className="plant-description__title">Описание</p>
                        <div className="plant-description__text">
                            {this.state.plantInfo?.description || ''}
                        </div>
                    </Card>
                    <CareBlock seasonsInfo={this.state.plantInfo?.seasonsInfo} feeding={this.state.plantInfo?.feeding}/>
                    <WateringBlock plant={this.props.selectedPlant}/>
                    <NotesBlock plantObjectId={this.props.selectedPlant.id} note={this.props.selectedPlant.note}/>
                </div>
            </>
        );
    }
}

export default CardPanel;
