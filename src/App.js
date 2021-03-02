import React, {Component} from 'react';
import MainView from "./views/main-view/MainView";
import { Root } from '@vkontakte/vkui';
import InstructionView from "./views/instruction-view/InstructionView";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedViewId: 'main-view'
        };
    }

    render() {
        return (
            <Root activeView={this.state.selectedViewId}>
                <MainView id="main-view" openInstructionView={this.openInstructionView} />
                <InstructionView id="instruction-view" openMainView={this.openMainView} />
            </Root>
        );
    }

    openInstructionView = () => {
        this.setState({
            selectedViewId: 'instruction-view'
        })
    }

    openMainView = () => {
        this.setState({
            selectedViewId: 'main-view'
        })
    }


}

export default App;