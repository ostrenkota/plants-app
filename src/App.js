import React, {Component} from 'react';
import MainView from "./views/main-view/MainView";
import { Root } from '@vkontakte/vkui';

class App extends Component {
    render() {
        return (
            <Root activeView="main-id">
                <MainView id="main-id" />

            </Root>
        );
    }
}

export default App;