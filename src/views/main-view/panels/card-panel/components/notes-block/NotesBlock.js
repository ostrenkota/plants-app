import React, {Component} from 'react';
import './NotesBlock.scss';
import {Group, FormItem, Textarea} from "@vkontakte/vkui";
import {Icon24WriteOutline} from "@vkontakte/icons";
import {clearModal, openModal} from "../../../../../../redux/actions/modal";
import {connect} from "react-redux";
import plantsApi from "../../../../../../core/axios/api/plantsApi";
import {fetchUser} from "../../../../../../redux/actions/user";

class NotesBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noteText: ''
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.dialogResult && this.props.dialogResult && this.props.modalId === 'notesModal') {
            if (this.props.dialogResult.confirm) {
                this.setState({
                    noteText: this.props.dialogResult.text
                });
                this.sendNewNoteToServer(this.props.dialogResult.text);
            }
            this.props.clearModal();
        }
    }

    onEditClick = () => {
        this.props.openModal('notesModal');
    }

    async sendNewNoteToServer(note) {
        await plantsApi.addPlantInfo(this.props.plantObjectId,{note});
        this.props.fetchUser();

    }

    render() {
        return (
            <div className="notes">
                <Group>
                    <Icon24WriteOutline className="notes__edit" onClick={this.onEditClick}/>
                    <FormItem top="Заметки" className="notes__title">
                        <Textarea value={this.state.noteText || this.props.note} disabled={true} placeholder="Сюда можно добавить любую информацию о растении"/>
                    </FormItem>
                </Group>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalId: state.modal.id,
        isOpen: state.modal.isOpen,
        dialogResult: state.modal.dialogResult
    }
}

export default connect(mapStateToProps, {openModal, clearModal, fetchUser})(NotesBlock);
