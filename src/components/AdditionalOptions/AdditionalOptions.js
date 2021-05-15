import React, {Component} from 'react';
import {Card, Cell, List} from "@vkontakte/vkui";
import './AdditionalOptions.scss';
import {Icon24Delete, Icon24Write} from "@vkontakte/icons";

class AdditionalOptions extends Component {

    onRenameClick = e => {
        e.stopPropagation();
        this.onClick();
    }

    onRemoveClick = e => {
        e.stopPropagation();
        this.onClick();
    }

    onClick = () => {
        this.props.clearBodyClickBlocking();
    }

    render() {
        return (
            <Card size="m" mode="shadow" className="additional-options">
                <List>
                    <Cell onClick={this.onRenameClick}>
                        <Icon24Write className="additional-options__icon"/>Переименовать</Cell>
                    <Cell onClick={this.onRemoveClick}>
                        <Icon24Delete className="additional-options__icon"/>Удалить
                    </Cell>
                </List>
            </Card>
        );
    }
}

export default AdditionalOptions;
