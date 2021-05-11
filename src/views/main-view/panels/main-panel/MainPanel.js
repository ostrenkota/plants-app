import React, { Component } from "react";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import "./MainPanel.scss";
import { EmptyLayout, PlantsList } from "./components";
import { Search } from "@vkontakte/vkui";
import AddPlant from "./components/AddPlant/AddPlant";

const plantsList = [
  {
    id: 1,
    img: "https://rastenievod.com/wp-content/uploads/2017/05/1-24.jpg",
    name: "Фиалка",
    description: "Фиа́лка — род растений семейства Фиалковые. Известно около пятисот видов, растущих преимущественно в Северном пол..."
  },
  {
    id: 2,
    img: "https://fiftyflowers.ru/image/catalog/blog/%D0%A3%D1%85%D0%BE%D0%B4%20%D0%B7%D0%B0%20%20%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81%D0%B0%D0%BC%D0%B8/kaktus-3.jpg",
    name: "Колючий друг",
    description: "своеобразные колючие растения, приспособившиеся к жизни в засу..."
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/1024px-Ficus_benjamina2.jpg",
    name: "Фикус Майкл",
    description: "Фи́кус — род растений семейства Тутовые, в составе которого образует монотипную трибу Фикусовые. Большинство видов — вечнозелёные..."
  },
  {
    id: 4,
    img: "https://cdn24.img.ria.ru/images/156091/43/1560914352_0:0:2820:2048_1440x900_80_1_1_85d335f1ef84fd002ec971ad8c284a49.jpg?source-sid=rian_photo",
    name: "Орхидея белая",
    description: "Орхидея – это тропический цветок, который в последние годы полюбился россиянам. Как ухаживать за растением в домашних условиях..."
  }
]


class MainPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plantsList,
      search: "",
    };
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    return (
      <div className="main-panel">
        <PanelHeader
            className="main-panel__header"
            left={
              <AddPlant openInstruction={this.props.openInstruction}/>
            }
            separator={false}
        >
          Мой Сад
        </PanelHeader>
        <Search
          disabled={!this.state.plantsList?.length}
          value={this.state.search}
          onChange={this.onChange}
          after={null}
          className={!this.state.plantsList?.length ?"search-bar_disabled" : ""}
        />
        {this.state.plantsList?.length ? (
          <PlantsList plantsList={plantsList} onCardClick={this.props.onCardClick}/>
        ) : (
          <EmptyLayout />
        )}
      </div>
    );
  }
}

export default MainPanel;
