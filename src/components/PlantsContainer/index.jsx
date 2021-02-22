import React, {Component} from 'react';
import FilterBar from "../FilterBar";
import PlantsList from "../PlantsList";
import InfoBox from "../InfoBox";
import "./PlantsContainer.scss";
import plantsApi from "../../core/axios/api/plantsApi";
import AdditionalInfo from "../AdditionalInfo";

class PlantsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            showImage: true,
            plantId: undefined,
            plantsList: []
        };
        this.onChange = this.onChange.bind(this);
        this.onCheckChange = this.onCheckChange.bind(this);
        this.onPlantClick = this.onPlantClick.bind(this);
    }

    onChange(value) {
        this.setState({
            filter: value
        })
    }

    onCheckChange(value){
        this.setState({
            showImage: value
        })
    }

    onPlantClick(value){
        console.log(value)
        this.setState({
            plantId: value
        })
    }

    componentDidMount() {
        plantsApi.getPlansList().then(plantsList => {
            this.setState({plantsList})
        })


    }

    render() {
        let plantInfo = this.state.plantsList.find(elem => elem.id === this.state.plantId);

        return (
            <div>
               <FilterBar onInputChange={this.onChange} onCheckChange={this.onCheckChange} initialCheckBox={this.state.showImage} placeholder="Название растения"/>
               <div className="plants-container">
                   <PlantsList filter={this.state.filter} plantsList={this.state.plantsList} showImage={this.state.showImage} infoBox={this.onPlantClick}/>
                   <InfoBox {...plantInfo} />
               </div>
               <AdditionalInfo plantId={this.state.plantId}/>
            </div>
        );
    }
}

export default PlantsContainer;