import React, { Component } from "react";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import "./MainPanel.scss";
import { EmptyLayout } from "./components";
import { Search, Placeholder, Button } from "@vkontakte/vkui";
import Icon56UsersOutline from "@vkontakte/icons/dist/56/users_outline";
import {PlantsPlaceholder} from "../../../../resources/icons";

class MainPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plantsList: [],
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
      <>
        <PanelHeader separator={false} >Мой Сад</PanelHeader>
        <Search
          disabled={!this.state.plantsList?.length}
          value={this.state.search}
          onChange={this.onChange}
          after={null}
          className={!this.state.plantsList?.length ?"search-bar_disabled" : ""}
        />
        {this.state.plantsList?.length ? (
          <div>список карточек</div>
        ) : (
          <EmptyLayout />
        )}
      </>
    );
  }
}

export default MainPanel;
