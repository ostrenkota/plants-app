import React, {Component} from 'react';
import {Button} from "@vkontakte/vkui";
import './get-started-panel.scss';
import howToUse1 from "../../../../resources/images/howToUse1.svg";
import howToUse2 from "../../../../resources/images/howToUse2.svg";
import howToUse3 from "../../../../resources/images/howToUse3.svg";

class GetStartedPanel extends Component {
    render() {
        return (
            <div className="get-started">
                <div className="get-started__info">
                    <div className="get-started__block">
                        <img src={howToUse1}/>
                        <p className="get-started__text">
                            Сфотографируйте свое растение или выберите фото из медиатеки
                        </p>
                    </div>
                    <div className="get-started__block">
                        <p className="get-started__text">
                            Получите результат распознавания и инструкции по уходу
                        </p>
                        <img src={howToUse2}/>
                    </div>
                    <div className="get-started__block">
                        <img src={howToUse3}/>
                        <p className="get-started__text">
                            Заботьтесь о своих растениях правильно
                        </p>
                    </div>
                    <Button mode="overlay_primary" size="l" onClick={this.props.launchApp} className="get-started__button">
                        Все понятно!
                    </Button>
                </div>
            </div>
        );
    }
}

export default GetStartedPanel;
