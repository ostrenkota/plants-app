import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Card, Div, ModalCard, ModalPage, ModalRoot, Textarea} from "@vkontakte/vkui";
import {closeModal} from "../../redux/actions/modal";
import {Icon48CameraOutline} from "@vkontakte/icons";
import "./Modal.scss";
import GoodPhoto from "../../resources/images/GoodPhoto.png";
import BadPhoto from "../../resources/images/BadPhoto.png";
import GoodPhoto1 from "../../resources/images/GoodPhoto1.png";
import BadPhoto1 from "../../resources/images/BadPhoto1.png";
import GoodPhoto2 from "../../resources/images/GoodPhoto2.png";
import BadPhoto2 from "../../resources/images/BadPhoto2.png";
import Icon24Camera from "@vkontakte/icons/dist/24/camera";

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
                <ModalPage
                    id="instructionModal"
                    onClose={() => this.onCameraModalAction(false)}
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
                                onClick={() => this.onCameraModalAction(true)}>Начнём
                        </Button>
                    </div>
                </ModalPage>
            </ModalRoot>
        );
    }
}

export default connect(
    mapStateToProps, { closeModal }
)(Modal);
