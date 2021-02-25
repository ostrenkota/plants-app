import React, {Component} from 'react';
import './MainView.scss';
import {Panel, View} from "@vkontakte/vkui";
import {CardPanel, MainPanel} from "./panels";


class MainView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'main-panel',
            selectedPlant: null
        }
    }

    onCardClick = (selectedPlant) => {
        this.setState({
            activePanel: 'card-panel',
            selectedPlant
        })
    }

    render() {
        return (
            <View id={this.props.id} activePanel={this.state.activePanel}>
                <Panel id="main-panel">
                    <MainPanel onCardClick={this.onCardClick}/>
                </Panel>
                <Panel id="card-panel">
                    <CardPanel selectedPlant={this.state.selectedPlant}/>
                </Panel>
            </View>
        );
    }
}

export default MainView;