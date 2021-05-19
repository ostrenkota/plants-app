import React, {Component} from 'react';
import {FormItem, Select, Switch} from "@vkontakte/vkui";
import './WateringBlock.scss';
import plantsApi from "../../../../../../core/axios/api/plantsApi";
import {fetchUser} from "../../../../../../redux/actions/user";
import {connect} from "react-redux";
import {clearModal, openModal} from "../../../../../../redux/actions/modal";

class WateringBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notificationsChecked: undefined,
            frequency: '',
            permission: false
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.dialogResult && this.props.dialogResult && this.props.modalId === 'notificationsModal') {
            if (this.props.dialogResult.confirm) {
                this[this.props.dialogResult.input.method](this.props.dialogResult.input.param);
                await plantsApi.setUserInfo({notifications: true});
                this.props.fetchUser();
            }
            this.props.clearModal();
        }
        if (!prevProps.permission && this.props.permission) {
            this.setState({
                permission: this.props.permission
            })
        }
    }

    componentDidMount() {
        if (this.state.notificationsChecked === undefined) {
            this.setState({
                notificationsChecked: !!this.props.plant.notifications,
                frequency: this.props.plant.notifications,
            })
        }

        this.setState({
            permission: this.props.permission
        })
    }

    onNotificationsToggled = async e => {
        if (!this.state.permission) {
            this.props.openModal('notificationsModal', {method: 'continueNotificationsToggled', param: !!e.target.checked});
            return;
        }
        this.continueNotificationsToggled(!!e.target.checked);
    }

    continueNotificationsToggled = async notificationsChecked => {
        let frequency = this.state.frequency;
        if (notificationsChecked){
            frequency || (frequency = '1');
        } else {
            frequency = '';
        }

        this.setState({
            notificationsChecked,
            frequency
        });
        await plantsApi.addPlantInfo(this.props.plant.id, {notifications: frequency});
        this.props.fetchUser();
    }

    onNotificationsFrequencyChanged = async e => {
        if (!this.state.permission) {
            this.props.openModal('notificationsModal', {method: 'continueNotificationsFrequencyChanged', param: e.target.value});
            return;
        }
        this.continueNotificationsFrequencyChanged(e.target.value);
    }

    continueNotificationsFrequencyChanged = async frequency => {
        const notificationsChecked = !!frequency;
        this.setState({
            frequency,
            notificationsChecked
        });
        await plantsApi.addPlantInfo(this.props.plant.id, {notifications: frequency});
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <p className="title">Напоминать о поливе:</p>
                <div className="reminder__container">
                    <FormItem className="reminder__list">
                        <Select onChange={this.onNotificationsFrequencyChanged}
                            value={this.state.frequency}
                            placeholder="Выберите частоту"
                            options={[
                                {value: '1', label: 'Раз в день' },
                                {value: '2', label: 'Раз в 2 дня' },
                                {value: '3', label: 'Раз в 3 дня' },
                                {value: '4', label: 'Раз в 4 дня' },
                                {value: '5', label: 'Раз в 5 дней' },
                                {value: '6', label: 'Раз в 6 дней' },
                                {value: '7', label: 'Раз в неделю' },
                                {value: '8', label: 'Раз в 8 дней' },
                                {value: '9', label: 'Раз в 9 дней' },
                                {value: '10', label: 'Раз в 10 дней' },
                                {value: '11', label: 'Раз в 11 дней' },
                                {value: '12', label: 'Раз в 12 дней' },
                                {value: '13', label: 'Раз в 13 дней' },
                                {value: '14', label: 'Раз в 2 недели' }
                            ]}
                        />
                    </FormItem>
                    <div className="reminder__switch-container">
                        <Switch className="reminder__switch" checked={!!this.state.notificationsChecked} onChange={this.onNotificationsToggled}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    permission: state.user.userData?.permissions.notifications,
    modalId: state.modal.id,
    dialogResult: state.modal.dialogResult,
})

export default connect(mapStateToProps, {fetchUser, openModal, clearModal})(WateringBlock);
