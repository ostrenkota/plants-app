import React, {Component} from 'react';
import {PanelHeaderButton} from "@vkontakte/vkui";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import FileUploader from "../../../../../../components/FileUploader/FileUploader";
import { connect } from "react-redux";
import {clearModal, openModal} from "../../../../../../redux/actions/modal";
import {openInstruction, clearInstruction} from "../../../../../../redux/actions/instruction";
import {updatePermissionAndSendToServer} from "../../../../../../redux/actions/user";

class AddPlant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initFileInput: false

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.dialogResult && this.props.dialogResult) {
            if (this.props.dialogResult.confirm) {

                if (!this.props.plants?.length && !this.props.instructionConfirmed) {
                    this.props.openInstruction();
                } else {
                    this.setState({
                        initFileInput: true
                    });
                }
                this.props.updatePermissionAndSendToServer();
            }
            this.props.clearModal();
        }

        if (!prevProps.instructionConfirmed && this.props.instructionConfirmed) {
            this.setState({
                permission: true,
                initFileInput: true
            });
            this.props.clearInstruction();
        }
    }

    componentDidMount() {
        if (this.props.instructionConfirmed) {
            this.setState({
                permission: true,
                initFileInput: true
            });
            this.props.clearInstruction();
        }
    }

    onAddClick = () => {
        if (this.props.permission) {
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

    render() {
        return (
            <FileUploader onInputClick={this.onInputClick} onFileSelect={this.onFileSelect} onAddClick={this.onAddClick} initFileInput={this.state.initFileInput}>
                <PanelHeaderButton>
                    <Icon28AddOutline />
                </PanelHeaderButton>
            </FileUploader>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalId: state.modal.id,
        dialogResult: state.modal.dialogResult,
        plants: state.user.plants,
        permission: state.user.permission,
        instructionConfirmed: state.instruction.confirmed
    }
}

export default connect(
    mapStateToProps,
    { openModal, clearModal, openInstruction, clearInstruction, updatePermissionAndSendToServer }
)(AddPlant);
