import React, {Component} from 'react';
import {Panel, ScreenSpinner, View} from "@vkontakte/vkui";

class LoadingView extends Component {
    render() {
        return (
            <View id={this.props.id} activePanel="main" popout={<ScreenSpinner />}>
             <Panel id="main" />
            </View>
        );
    }
}

export default LoadingView;
