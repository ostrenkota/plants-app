import React, {Component} from 'react';
import {PanelHeaderButton} from "@vkontakte/vkui";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import FileUploader from "../../../../../../components/FileUploader/FileUploader";
import PermissionModal from "../../../../../../components/PermissionModal/PermissionModal";

class AddPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            permission: false,
            shouldShowModal: false,
            initFileInput: false

        }
    }

    render() {
        return (
            <>
                <FileUploader onFileSelect={this.onFileSelect} onAddClick={this.onAddClick} initFileInput={this.state.initFileInput}>
                    <PanelHeaderButton>
                        <Icon28AddOutline />
                    </PanelHeaderButton>
                </FileUploader>
                {
                 this.state.shouldShowModal && <PermissionModal onClick={this.onModalClick}/>
                }
            </>
        );
    }

    onModalClick = (approve) => {
        if (approve) {
            this.setState({
                initFileInput: true,
                shouldShowModal: false,
                permission: true
            })
            this.sendPermissionToServer();
            return;
        }
        this.setState({
            shouldShowModal: false
        })
    }

    onAddClick = () => {
        if (this.state.permission) {
            this.setState({
                initFileInput: true
            })
            return;
        }
        this.setState({
            shouldShowModal: true
        })
    }

    onFileSelect = (file) => {
        console.log(file);
        this.setState({
            initFileInput: false
        })
    }

    sendPermissionToServer = () => {
        console.log("Permission saved on the server")
    }
}

export default AddPlant;
