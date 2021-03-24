import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Div, ModalCard, ModalRoot, Textarea} from "@vkontakte/vkui";
import {closeModal} from "../../redux/actions/modal";
import {Icon48CameraOutline} from "@vkontakte/icons";
import "./Modal.scss";

function mapStateToProps(state) {
    return {
        modalId: state.modal.id,
        isOpen: state.modal.isOpen
    };
}

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notesText: ''
        }
    }

    onCameraModalAction = confirm => {
        this.props.closeModal('cameraModal', { confirm })
    }

    onNotesModalAction = confirm => {
        this.props.closeModal('notesModal', { confirm, text: this.state.notesText })
    }

    onNotesTextChanges = (e) => {
        this.setState({
            notesText: e.target.value
        })
    }

    render() {
        return (
            <ModalRoot activeModal={this.props.modalId}>
                <ModalCard id="cameraModal"
                           onClose={() => this.onCameraModalAction(false)}
                           icon={<Icon48CameraOutline className="modal-card__icon"/>}
                           header="Приложение запрашивает доступ к камере и галерее"
                           subheader="Вы сможете определять название растения по фото и добавлять его в свой сад">
                    <Div style={{display: 'flex'}}>
                        <Button size="l" stretched style={{ marginRight: 8 }} onClick={() => this.onCameraModalAction(true)}>
                            Разрешить
                        </Button>
                        <Button size="l" stretched mode="secondary" onClick={() => this.onCameraModalAction(false)}>
                            Запретить
                        </Button>
                    </Div>
                </ModalCard>
                <ModalCard id="notesModal"
                           onClose={() => this.onNotesModalAction(false)}
                           header="Расскажите о растении"
                           actions={
                               <Button size="l" mode="primary" onClick={() => this.onNotesModalAction(true)}>
                                   Сохранить
                               </Button>
                           }
                >
                    <Textarea value={this.state.notesText} onChange={this.onNotesTextChanges} defaultValue="Подарил Вася на др"/>
                </ModalCard>
            </ModalRoot>
        );
    }
}

export default connect(
    mapStateToProps, { closeModal }
)(Modal);
