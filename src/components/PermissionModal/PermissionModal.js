import React, {Component} from 'react';
import './PermissionModal.scss';
import {ModalCard, Div, Button} from "@vkontakte/vkui";
import {Icon48CameraOutline} from "@vkontakte/icons";

class PermissionModal extends Component {
    render() {
        return (
            <div className="layout">
                <ModalCard
                    id='money-send'
                    onClose={() => this.props.onClick(false)}
                    icon={<Icon48CameraOutline />}
                    header="Приложение запрашивает доступ к камере и галерее"
                    subheader="Вы сможете определять название растения по фото и добавлять его в свой сад"
                    actions={
                        <Div style={{display: 'flex'}}>
                            <Button size="l" stretched style={{ marginRight: 8 }}  onClick={() => this.props.onClick(true)}>Разрешить</Button>
                            <Button size="l" stretched mode="secondary" onClick={() => this.props.onClick(false)}>Запретить</Button>
                        </Div>
                    }>
                </ModalCard>
            </div>
            // <div className="permission-modal">
            //     <button onClick={() => this.props.onClick(false)}>Cancel</button>
            //     <button onClick={() => this.props.onClick(true)}>Ok</button>
            // </div>
        );
    }
}

export default PermissionModal;
