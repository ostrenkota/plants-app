import React, { Component } from "react";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import "./MainPanel.scss";
import { EmptyLayout, PlantsList } from "./components";
import { Search } from "@vkontakte/vkui";
import AddPlant from "./components/AddPlant/AddPlant";
import {connect} from "react-redux";
import {serverUrl} from "../../../../core/axios/httpClient";


class MainPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  getFilteredPlants = () => {
    return !this.state.search ? this.props.plantsList : this.props.plantsList.filter(plant => plant.name.include(this.state.search));
  }

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
        {this.props.plantsList?.length ? (
          <PlantsList plantsList={this.getFilteredPlants()} onCardClick={this.props.onCardClick}/>
        ) : (
          <EmptyLayout />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plantsList: state.user?.userData?.plants?.map(plant => ({
    id: plant._id,
    img: `${serverUrl}/img/${plant.picture}`,
    name: plant.plantName,
    description: plant.description,
    plantId: plant.plantId,
    note: plant.note,
    notifications: plant.notifications
  })) || []
});

export default connect(mapStateToProps, {})(MainPanel);
