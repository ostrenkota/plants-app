import React, {Component} from 'react';
import {Button, Placeholder} from "@vkontakte/vkui";
import "./EmptyLayout.scss";
import {PlantsPlaceholder} from "../../../../../../resources/icons";

class EmptyLayout extends Component {
    render() {
        return (
            <div className="placeholder">
                <Placeholder
                    icon={<PlantsPlaceholder />}
                    header="Ваш сад пока пуст"
                    action={<Button size="m"> Добавить растение</Button>}
                >
                    Здесь будут отображаться растения, которые Вы добавите
                </Placeholder>
            </div>
        );
    }
}

export default EmptyLayout;