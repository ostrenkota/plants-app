import React, {Component} from 'react';
import {Panel, View} from "@vkontakte/vkui";
import InfoPanel from "./panels/info-panel/info-panel";
import GetStartedPanel from "./panels/get-started-panel/get-started-panel";

class IntroView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePanel: 'info-panel'
        }
    }

    openNextPanel = id => {
        this.setState({
            activePanel: id
        });
    }

    launchApp = () => {
        this.props.launchApp();
    }

    render() {
        return (
            <View id={this.props.id} activePanel={this.state.activePanel}>
                <Panel id="info-panel">
                    <InfoPanel openNextPanel={this.openNextPanel}/>
                </Panel>
                <Panel id="get-started-panel">
                    <GetStartedPanel launchApp={this.launchApp}/>
                </Panel>
            </View>
        );
    }
}

export default IntroView;
