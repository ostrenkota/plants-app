import React, {Component} from 'react';
import {PanelHeaderButton} from "@vkontakte/vkui";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import FileUploader from "../../../../../../components/FileUploader/FileUploader";
import { connect } from "react-redux";
import {clearModal, openModal} from "../../../../../../redux/actions/modal";
import {openInstruction, clearInstruction} from "../../../../../../redux/actions/instruction";
import {fetchUser} from "../../../../../../redux/actions/user";
import plantsApi from "../../../../../../core/axios/api/plantsApi";
import {serverUrl} from "../../../../../../core/axios/httpClient";

class AddPlant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initFileInput: false,
            plantName: '',
            plantId: '',
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.clickAdd && !prevProps.clickAdd) {
            this.onAddClick();
        }
        if (!prevProps.dialogResult && this.props.dialogResult && this.props.modalId === 'cameraModal') {
            if (this.props.dialogResult.confirm) {

                if (!this.props.plants?.length && !this.props.instructionConfirmed) {
                    this.props.openInstruction();
                } else {
                    this.setState({
                        initFileInput: true
                    });
                }
                this.updatePermissionAndSendToServer();
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

        if (!prevProps.dialogResult && this.props.dialogResult && this.props.modalId === 'plantNameModal') {
            if (this.props.dialogResult.confirm) {
                this.setState({
                    plantName: this.props.dialogResult.text
                });
                await this.sendNameToServer(this.props.dialogResult.text);
                this.props.fetchUser();
            }
            this.props.clearModal();
        }

        if (!prevProps.dialogResult && this.props.dialogResult && this.props.modalId === 'nonExistentPlantModal') {
            this.props.clearModal();
        }
    }

    async updatePermissionAndSendToServer() {
        await plantsApi.setUserInfo({camera: true});
        fetchUser();
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

    onFileSelect = async file => {
        const response = await plantsApi.addPlant(file);
        if(response.errorCode === 1001){
            this.props.openModal('nonExistentPlantModal');
        } else {
            this.props.openModal('plantNameModal', {
                img: `${serverUrl}/img/${response.picture}`,
                plantLabel: response.label
            });
            this.setState({
                plantId: response._id
            })
        }
    }

    onInputClick = () => {
        this.setState({
            initFileInput: false
        })
    }

    async sendNameToServer(name) {
        const response = await plantsApi.addPlantInfo( this.state.plantId,{plantName: name})
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

const mapStateToProps = state => {
    return {
        modalId: state.modal.id,
        dialogResult: state.modal.dialogResult,
        plants: state.user.plants,
        instructionConfirmed: state.instruction.confirmed,
        permission: state.user?.userData?.permissions?.camera
    }
}

export default connect(
    mapStateToProps,
    { openModal, clearModal, openInstruction, clearInstruction, fetchUser }
)(AddPlant);
