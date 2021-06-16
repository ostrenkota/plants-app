import React, {Component} from 'react';
import MainView from "./views/main-view/MainView";
import { Root } from '@vkontakte/vkui';
import IntroView from "./views/intro-view/intro-view";
import {connect} from "react-redux";
import LoadingView from "./views/loading-view/loading-view";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedViewId: 'loading-view'
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isNewUser !== undefined && prevProps.isNewUser === undefined) {
            this.setState({
                  selectedViewId: this.props.isNewUser ? 'intro-view' : 'main-view'
            })
        }
    }

    componentDidMount() {
        if (this.props.isNewUser !== undefined) {
            this.setState({
                //   selectedViewId: this.props.isNewUser ? 'intro-view' : 'main-view'
                selectedViewId:'intro-view'
            })
        }
    }

    launchApp = () => {
        this.setState({
            selectedViewId: 'main-view'
        })
    }

    render() {
        return (
            <Root activeView={this.state.selectedViewId}>
                <LoadingView id="loading-view"/>
                <MainView id="main-view" />
                <IntroView id="intro-view" launchApp={this.launchApp} />
            </Root>
        );
    }

    openMainView = () => {
        this.setState({
            selectedViewId: 'main-view'
        })
    }
}

const mapStateToProps = state => ({
    isNewUser: state.user?.isNew
})

export default connect(mapStateToProps)(App);
