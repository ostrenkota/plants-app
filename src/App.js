import React, {Component} from 'react';
import MainView from "./views/main-view/MainView";
import { Root } from '@vkontakte/vkui';

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
                <MainView id="main-view" />
            </Root>
        );
    }

    openMainView = () => {
        this.setState({
            selectedViewId: 'main-view'
        })
    }


}

export default App;
