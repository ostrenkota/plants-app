import React, {Component} from 'react';
import {Button, Placeholder} from "@vkontakte/vkui";
import './info-panel.scss';
import startPageImage from "../../../../resources/images/startPageImage.svg";

class InfoPanel extends Component {
    render() {
        return (
        <div className="placeholder" style={{position: "static"}}>
            <Placeholder
                icon={<img src={startPageImage}/>}
                header="А вы знали, что из-за неправильного ухода в течение года погибает до 70% купленных растений?"
                action={<Button size="l" onClick={() => this.props.openNextPanel('get-started-panel')}>Отлично!</Button>}
            >
                Наше приложение поможет вам правильно заботиться о своих комнатных растениях и сократить этот процент!
            </Placeholder>
        </div>
        );
    }
}

export default InfoPanel;
