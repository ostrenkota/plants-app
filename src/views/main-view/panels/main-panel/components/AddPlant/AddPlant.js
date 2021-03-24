import React, {Component} from 'react';
import {PanelHeaderButton} from "@vkontakte/vkui";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import FileUploader from "../../../../../../components/FileUploader/FileUploader";
import { connect } from "react-redux";
import {clearModal, openModal} from "../../../../../../redux/actions/modal";

class AddPlant extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.dialogResult && this.props.dialogResult) {
            if (this.props.dialogResult.confirm) {
                this.setState({
                    permission: true,
                    initFileInput: true
                });
                this.sendPermissionToServer();
            }
            this.props.clearModal();
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            permission: false,
            initFileInput: false

        }
    }

    render() {
        return (
           <FileUploader onInputClick={this.onInputClick} onFileSelect={this.onFileSelect} onAddClick={this.onAddClick} initFileInput={this.state.initFileInput}>
                <PanelHeaderButton>
                    <Icon28AddOutline />
                </PanelHeaderButton>
            </FileUploader>
        );
    }

    onAddClick = () => {
        if (this.state.permission) {
            this.setState({
                initFileInput: true
            })
            return;
        }
        this.props.openModal('cameraModal');
    }

    onFileSelect = (file) => {
        console.log(file);
    }

    onInputClick = () => {
        this.setState({
            initFileInput: false
        })
    }

    sendPermissionToServer = () => {
        console.log("Permission saved on the server")
    }
}

const mapStateToProps = (state) => {
    return {
        modalId: state.modal.id,
        dialogResult: state.modal.dialogResult
    }
}

export default connect(mapStateToProps, { openModal, clearModal })(AddPlant);
