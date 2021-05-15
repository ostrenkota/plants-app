import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Card, Div, ModalCard, ModalPage, ModalRoot, Textarea} from "@vkontakte/vkui";
import {closeModal} from "../../redux/actions/modal";
import {Icon48CameraOutline, Icon56DoNotDisturbOutline} from "@vkontakte/icons";
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
            notesText: '',
            plantName: ''
        }
    }

    onModalAction = (confirm, modalName) => {
        this.props.closeModal(modalName, { confirm })
    }

    onModalWithTextAction = (confirm, modalName, text) => {
        this.props.closeModal(modalName, { confirm, text: text })
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
                {/*<ModalPage
                    id="instructionModal"
                    onClose={() => this.onModalAction(false, "instructionModal")}
                    settlingHeight={100}>
                    <div className="instruction__header">
                        <svg height="15vh" width="100%">
                            <ellipse cx="50%" cy="30%" rx="60%" ry="60%"
                                     style={{fill:"var(--secondary-backgroung-color)"}} />
                        </svg>
                        <p className="instruction__title">3 секрета правильного фото</p>
                    </div>
                    <Card size="l" mode="shadow" className="instruction-card">
                        <div className="instruction-card__wrapper">
                            <p className="instruction-card__title">Одно растение на фото</p>
                            <div className="instruction-card__photos">
                                <img src={GoodPhoto} className="instruction-card__photo"/>
                                <img src={BadPhoto} className="instruction-card__photo"/>
                            </div>
                        </div>
                    </Card>
                    <Card size="l" mode="shadow" className="instruction-card">
                        <div className="instruction-card__wrapper">
                            <p className="instruction-card__title">Хорошо видны листья</p>
                            <div className="instruction-card__photos">
                                <img src={GoodPhoto1} className="instruction-card__photo"/>
                                <img src={BadPhoto1} className="instruction-card__photo"/>
                            </div>
                        </div>
                    </Card>
                    <Card size="l" mode="shadow" className="instruction-card">
                        <div className="instruction-card__wrapper">
                            <p className="instruction-card__title">Хорошее освещение и четкость</p>
                            <div className="instruction-card__photos">
                                <img src={GoodPhoto2} className="instruction-card__photo"/>
                                <img src={BadPhoto2} className="instruction-card__photo"/>
                            </div>
                        </div>
                    </Card>
                    <div className="instruction__button-container">
                        <Button before={<Icon24Camera/>} size="l"
                                className="instruction__button"
                                onClick={() => this.onModalAction(true, "instructionModal")}>Начнём
                        </Button>
                    </div>
                </ModalPage>*/}
            </ModalRoot>
        );
    }
}

export default connect(
    mapStateToProps, { closeModal }
)(Modal);
