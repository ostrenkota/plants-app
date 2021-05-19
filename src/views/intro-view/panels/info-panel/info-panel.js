import React, {Component} from 'react';
import {Button} from "@vkontakte/vkui";
import './info-panel.scss';

class InfoPanel extends Component {
    render() {
        return (
            <div>
                Наше приложение самое крутое!!!

                <Button onClick={() => this.props.openNextPanel('get-started-panel')}>Ок</Button>
            </div>
        );
    }
}

export default InfoPanel;
