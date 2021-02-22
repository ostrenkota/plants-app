import React, {Component} from 'react';
import plantsApi from "../../core/axios/api/plantsApi";

class AdditionalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ""
        };
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        plantsApi.getAdditionalInfo(this.props.plantId).then(result => {
            this.setState({
                info: result
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Show additional info</button>
                <p>{this.state.info}</p>
            </div>
        );
    }
}

export default AdditionalInfo;