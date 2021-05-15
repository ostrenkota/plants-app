import React, {Component} from 'react';
import {Card, Cell, List} from "@vkontakte/vkui";
import './AdditionalOptions.scss';
import {Icon24Delete, Icon24Write} from "@vkontakte/icons";
import {openModal} from "../../redux/actions/modal";
import {connect} from "react-redux";

class AdditionalOptions extends Component {

    onRenameClick = e => {
        this.props.openModal("editPlantNameModal", {
            plantName: this.props.plant.name,
            id: this.props.plant.id,
            plantLabel: this.props.plant.label,
            img: this.props.plant.img
        });
        e.stopPropagation();
        this.onClick();
    }

    onRemoveClick = e => {
        this.props.openModal("confirmDeletion", {plantName: this.props.plant.name, id: this.props.plant.id});
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
                    <Cell onClick={this.onRemoveClick} style={{paddingBottom: 8}}>
                        <Icon24Delete className="additional-options__icon"/>Удалить
                    </Cell>
                </List>
            </Card>
        );
    }
}



export default connect(null, {openModal})(AdditionalOptions);
