import React, {Component} from 'react';
import {FormItem, Select, Switch} from "@vkontakte/vkui";
import './WateringBlock.scss';

class WateringBlock extends Component {
    render() {
        return (
            <div>
                <p className="title">Напоминать о поливе:</p>
                <div className="reminder__container">
                    <FormItem className="reminder__list">
                        <Select
                            placeholder="Выберите частоту"
                            options={[
                                {value: '0', label: 'Раз в день' },
                                {value: '1', label: 'Раз в 2 дня' },
                                {value: '2', label: 'Раз в 3 дня' },
                                {value: '3', label: 'Раз в 4 дня' },
                                {value: '4', label: 'Раз в 5 дней' },
                                {value: '5', label: 'Раз в 6 дней' },
                                {value: '6', label: 'Раз в неделю' }
                            ]}
                        />
                    </FormItem>
                    <div className="reminder__switch-container">
                        <Switch className="reminder__switch"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WateringBlock;