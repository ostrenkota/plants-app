import React, {Component} from 'react';
import './MainView.scss';
import {Panel, View} from "@vkontakte/vkui";
import {CardPanel, MainPanel} from "./panels";


class MainView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'main-panel'
        }
    }

    render() {
        return (
            <View id={this.props.id} activePanel={this.state.activePanel}>
                <Panel id="main-panel">
                    <MainPanel />
                </Panel>
                <Panel id="card-panel">
                    <CardPanel />
                    <button onClick={() => this.togglePanel("main-panel")}>toggle</button>
                </Panel>
            </View>
        );
    }

    togglePanel = panelId => {
        this.setState({
            activePanel: panelId
        })
    }
}

export default MainView;