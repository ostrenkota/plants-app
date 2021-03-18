import React, {Component} from 'react';
import {Card, Button, } from "@vkontakte/vkui";
import GoodPhoto from '../../../resources/images/GoodPhoto.png';
import GoodPhoto1 from '../../../resources/images/GoodPhoto1.png';
import GoodPhoto2 from '../../../resources/images/GoodPhoto2.png';
import BadPhoto from '../../../resources/images/BadPhoto.png';
import BadPhoto1 from '../../../resources/images/BadPhoto1.png';
import BadPhoto2 from '../../../resources/images/BadPhoto2.png';
import Icon24Camera from "@vkontakte/icons/dist/24/camera";
import './InstructionPanel.scss';

class InstructionPanel extends Component {
    render() {
        return (
            <div>
                <div className="instruction__header">
                    <svg height="15vh" width="100%">
                        <ellipse cx="50%" cy="30%" rx="60%" ry="60%"
                                 style={{fill:"var(--secondary-backgroung-color)"}} />
                    </svg>
                    <p className="instruction__title">3 секрета правильного фото</p>
                </div>
                <Card size="l" mode="shadow" className="instruction-card">
                    <div className="instruction-card__wrapper">
                        <p className="instruction-card__title">Одно растение на фото</p>
                        <div className="instruction-card__photos">
                            <img src={GoodPhoto} className="instruction-card__photo"/>
                            <img src={BadPhoto} className="instruction-card__photo"/>
                        </div>
                    </div>
                </Card>
                <Card size="l" mode="shadow" className="instruction-card">
                    <div className="instruction-card__wrapper">
                        <p className="instruction-card__title">Хорошо видны листья</p>
                        <div className="instruction-card__photos">
                            <img src={GoodPhoto1} className="instruction-card__photo"/>
                            <img src={BadPhoto1} className="instruction-card__photo"/>
                        </div>
                    </div>
                </Card>
                <Card size="l" mode="shadow" className="instruction-card">
                    <div className="instruction-card__wrapper">
                        <p className="instruction-card__title">Хорошее освещение и четкость</p>
                        <div className="instruction-card__photos">
                            <img src={GoodPhoto2} className="instruction-card__photo"/>
                            <img src={BadPhoto2} className="instruction-card__photo"/>
                        </div>
                    </div>
                </Card>
                <div className="instruction__button-container">
                    <Button before={<Icon24Camera/>} size="l" className="instruction__button">Начнём</Button>
                </div>
            </div>
        );
    }
}

export default InstructionPanel;