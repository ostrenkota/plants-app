import React, {Component} from 'react';
import './MainView.scss';
import {Panel, ScreenSpinner, View} from "@vkontakte/vkui";
import {CardPanel, MainPanel} from "./panels";
import Modal from "../../components/modals/Modal";
import { connect } from "react-redux";
import InstructionPanel from "./panels/instruction-panel/InstructionPanel";



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

    openInstruction = () => {
        this.setState({
            activePanel: 'instruction-panel'
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.instructionOpened !== prevProps.instructionOpened) {
            this.setState({
                activePanel: this.props.instructionOpened ? 'instruction-panel' : 'main-panel'
            })
        }
    }

    render() {
        return (
            <View id={this.props.id} activePanel={this.state.activePanel} modal={<Modal />}>
                <Panel id="main-panel">
                    <MainPanel
                        userDataLoading={this.props.userDataLoading}
                        onCardClick={this.onCardClick}
                    />
                </Panel>
                <Panel id="card-panel">
                    <CardPanel onBackClick={this.onBackClick} selectedPlant={this.state.selectedPlant}/>
                </Panel>
                <Panel id="instruction-panel">
                    <InstructionPanel />
                </Panel>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    instructionOpened: state.instruction.isOpen,
})

export default connect(mapStateToProps, {})(MainView);
