import React, {Component} from 'react';
import { View, Panel } from '@vkontakte/vkui';
import InstructionPanel from "./instruction-panel/InstructionPanel";

class InstructionView extends Component {
    render() {
        return (
            <View id={this.props.id} activePanel="instruction-panel">
                <Panel id="instruction-panel">
                    <InstructionPanel />
                </Panel>
            </View>
        );
    }
}

export default InstructionView;