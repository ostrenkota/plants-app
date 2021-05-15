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
                        <Select onChange={() => {}}
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
                        <Switch className="reminder__switch"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WateringBlock;
