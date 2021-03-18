import React, {Component} from 'react';
import './PermissionModal.scss';

class PermissionModal extends Component {
    render() {
        return (
            <div className="permission-modal">
                <button onClick={() => this.props.onClick(false)}>Cancel</button>
                <button onClick={() => this.props.onClick(true)}>Ok</button>
            </div>
        );
    }
}

export default PermissionModal;
