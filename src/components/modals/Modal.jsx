import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Avatar, Button, Card, Div, ModalCard, ModalPage, ModalRoot, Textarea, Title} from "@vkontakte/vkui";
import {closeModal} from "../../redux/actions/modal";
import {
    Icon48CameraOutline,
    Icon48WritebarSend,
    Icon56DeleteOutline,
    Icon56DoNotDisturbOutline
} from "@vkontakte/icons";
import "./Modal.scss";

function mapStateToProps(state) {
    return {
        modalId: state.modal.id,
        isOpen: state.modal.isOpen,
        input: state.modal.input
    };
}

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notesText: '',
            plantName: ''
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.modalId === 'editPlantNameModal' && prevProps.modalId !== 'editPlantNameModal') {
            this.setState({
                plantName: this.props.input.plantName
            });
        }
    }

    onModalAction = (confirm, modalName, payload = {}) => {
        this.props.closeModal(modalName, { confirm, ...payload })
    }

    onModalWithTextAction = (confirm, modalName, text) => {
        this.props.closeModal(modalName, { confirm, text: text });
        this.setState({
            plantName: ''
        });
    }

    onNotesTextChanges = (e) => {
        this.setState({
            notesText: e.target.value
        })
    }

    onPlantNameChange = (e) => {
        this.setState({
            plantName: e.target.value
        })
    }

    render() {
        return (
            <ModalRoot activeModal={this.props.modalId}>
                <ModalCard id="cameraModal"
                           onClose={() => this.onModalAction(false, "cameraModal")}
                           icon={<Icon48CameraOutline className="modal-card__icon"/>}
                           header="Приложение запрашивает доступ к камере и галерее"
                           subheader="Вы сможете определять название растения по фото и добавлять его в свой сад">
                    <Div style={{display: 'flex'}}>
                        <Button size="l" stretched style={{ marginRight: 8 }} onClick={() => this.onModalAction(true, "cameraModal")}>
                            Разрешить
                        </Button>
                        <Button size="l" stretched mode="secondary" onClick={() => this.onModalAction(false, "cameraModal")}>
                            Запретить
                        </Button>
                    </Div>
                </ModalCard>
                <ModalCard id="notificationsModal"
                           onClose={() => this.onModalAction(false, "notificationsModal")}
                           icon={<Icon48WritebarSend className="modal-card__icon"/>}
                           header="Приложение запрашивает доступ к отправке уведомлений"
                           subheader="Вы сможете получать уведомления о поливе и не оставлять любимые растения без воды">
                    <Div style={{display: 'flex'}}>
                        <Button size="l" stretched style={{ marginRight: 8 }} onClick={() => this.onModalAction(true, "notificationsModal", {input: this.props.input})}>
                            Разрешить
                        </Button>
                        <Button size="l" stretched mode="secondary" onClick={() => this.onModalAction(false, "notificationsModal")}>
                            Запретить
                        </Button>
                    </Div>
                </ModalCard>
                <ModalCard id="notesModal"
                           onClose={() => this.onModalWithTextAction(false, "notesModal", this.state.notesText)}
                           header="Расскажите о растении"
                           actions={
                               <Button size="l" mode="primary" onClick={() => this.onModalWithTextAction(true, "notesModal", this.state.notesText)}>
                                   Сохранить
                               </Button>
                           }
                >
                    <Textarea value={this.state.notesText} onChange={this.onNotesTextChanges} defaultValue="Подарила Аня на новый год"/>
                </ModalCard>
                <ModalCard
                    id="plantNameModal"
                    onClose={() => this.onModalWithTextAction(false, "plantNameModal", this.state.plantName)}
                    header="Введите имя растения"
                    actions={
                        <Button size="l" mode="primary" onClick={() => this.onModalWithTextAction(true, "plantNameModal", this.state.plantName)}>
                            Сохранить
                        </Button>
                    }
                >
                    <Div style={{display: 'flex', alignItems: "center", flexDirection: "column"}}>
                        { this.props?.input?.img &&
                        <Avatar size={104} src={this.props?.input?.img} />
                        }
                        { this.props?.input?.plantLabel &&
                        <Title level="3" weight="semibold" style={{ marginBottom: 16 }}>{this.props?.input?.plantLabel}</Title>
                        }
                    </Div>
                    <Textarea value={this.state.plantName} onChange={this.onPlantNameChange} defaultValue="Колючий друг" />
                </ModalCard>
                <ModalCard
                    id="nonExistentPlantModal"
                    onClose={() => this.onModalAction(false, "nonExistentPlantModal")}
                    icon={<Icon56DoNotDisturbOutline/>}
                    header="Похоже, в нашей базе пока нет такого растения"
                    subheader="Мы постараемся добавить его как можно скорее."
                    actions={
                        <Button size="l" mode="primary" onClick={() => this.onModalAction(false, "nonExistentPlantModal")}>
                            Понятно
                        </Button>
                    }
                >
                </ModalCard>
                <ModalCard
                    id="confirmDeletion"
                    onClose={() => this.onModalAction(false, "confirmDeletion")}
                    icon={<Icon56DeleteOutline/>}
                    header={`Вы точно хотите удалить растение ${this.props?.input?.plantName}?`}
                    subheader="Отменить это действие будет невозможно."
                >
                    <Div style={{display: 'flex'}}>
                        <Button size="l" stretched style={{ marginRight: 8 }} onClick={() => this.onModalAction(false, "confirmDeletion")}>
                            Отменить
                        </Button>
                        <Button size="l" stretched mode="secondary" onClick={() => this.onModalAction(this.props?.input?.id, "confirmDeletion")}>
                            Удалить
                        </Button>
                    </Div>
                </ModalCard>
                <ModalCard
                    id="editPlantNameModal"
                    onClose={() => this.onModalWithTextAction(false, "editPlantNameModal", this.state.plantName)}
                    header="Измените название растения"
                >
                    <Div style={{display: 'flex', alignItems: "center", flexDirection: "column"}}>
                    { this.props?.input?.img &&
                        <Avatar size={104} src={this.props?.input?.img} />
                    }
                    { this.props?.input?.plantLabel &&
                        <Title level="3" weight="semibold" style={{ marginBottom: 16 }} className="plant-name-to-change">{this.props?.input?.plantLabel}</Title>
                    }
                    </Div>
                    <Textarea value={this.state.plantName} onChange={this.onPlantNameChange} />
                    <Div style={{display: 'flex'}}>
                        <Button size="l" stretched mode="secondary" style={{ marginRight: 8 }} onClick={() => this.onModalAction(false, "editPlantNameModal")}>
                            Отменить
                        </Button>
                        <Button size="l" stretched onClick={() => this.onModalWithTextAction(this.props?.input?.id, "editPlantNameModal", this.state.plantName)}>
                            Сохранить
                        </Button>
                    </Div>
                </ModalCard>
            </ModalRoot>
        );
    }
}

export default connect(
    mapStateToProps, { closeModal }
)(Modal);
