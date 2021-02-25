import React, { Component } from "react";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import "./MainPanel.scss";
import { EmptyLayout, PlantsList } from "./components";
import { Search, Placeholder, Button, PanelHeaderButton } from "@vkontakte/vkui";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";

const plantsList = [
  {
    img: "https://fiftyflowers.ru/image/catalog/blog/%D0%A3%D1%85%D0%BE%D0%B4%20%D0%B7%D0%B0%20%20%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81%D0%B0%D0%BC%D0%B8/kaktus-3.jpg",
    name: "Очень-очень Колючий Игнат",
    description: "своеобразные колючие растения, приспособившиеся к жизни в засуikbdsq rkbvfndd"
  },
  {
    img: "https://fiftyflowers.ru/image/catalog/blog/%D0%A3%D1%85%D0%BE%D0%B4%20%D0%B7%D0%B0%20%20%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81%D0%B0%D0%BC%D0%B8/kaktus-3.jpg",
    name: "Колючий Игнат",
    description: "своеобразные колючие растения, приспособившиеся к жизни в засу..."
  },
  {
    img: "https://fiftyflowers.ru/image/catalog/blog/%D0%A3%D1%85%D0%BE%D0%B4%20%D0%B7%D0%B0%20%20%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81%D0%B0%D0%BC%D0%B8/kaktus-3.jpg",
    name: "Колючий Игнат",
    description: "своеобразные колючие растения, приспособившиеся к жизни в засу..."
  },
  {
    img: "https://fiftyflowers.ru/image/catalog/blog/%D0%A3%D1%85%D0%BE%D0%B4%20%D0%B7%D0%B0%20%20%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81%D0%B0%D0%BC%D0%B8/kaktus-3.jpg",
    name: "Колючий Игнат",
    description: "своеобразные колючие растения, приспособившиеся к жизни в засу..."
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
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="main-panel">
        <PanelHeader
            className="main-panel__header" left={<PanelHeaderButton><Icon28AddOutline /></PanelHeaderButton>} separator={false} >Мой Сад</PanelHeader>
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
