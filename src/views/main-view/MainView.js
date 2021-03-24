import React, {Component} from 'react';
import './MainView.scss';
import {Panel, View} from "@vkontakte/vkui";
import {CardPanel, MainPanel} from "./panels";
import Modal from "../../components/modals/Modal";


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

    onBackClick = () => {
        this.setState({
            activePanel: 'main-panel'
        })
    }

    render() {
        return (
            <View id={this.props.id} activePanel={this.state.activePanel} modal={<Modal />}>
                <Panel id="main-panel">
                    <MainPanel onCardClick={this.onCardClick} openInstructionView={this.props.openInstructionView}/>
                </Panel>
                <Panel id="card-panel">
                    <CardPanel onBackClick={this.onBackClick} selectedPlant={this.state.selectedPlant}/>
                </Panel>
            </View>
        );
    }
}

export default MainView;
