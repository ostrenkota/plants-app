import React, {Component} from 'react';
import {Button} from "@vkontakte/vkui";
import './get-started-panel.scss';

class GetStartedPanel extends Component {
    render() {
        return (
            <div>
                Тут будет инструкция и описание функциональности

                <Button onClick={this.props.launchApp}>Поехали</Button>
            </div>
        );
    }
}

export default GetStartedPanel;
