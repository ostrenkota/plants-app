import React from 'react';
import {Card, IconButton,} from "@vkontakte/vkui";
import "./PlantCard.scss";
import Icon24MoreHorizontal from "@vkontakte/icons/dist/24/more_horizontal";
import AdditionalOptions from "../../../../../../components/AdditionalOptions/AdditionalOptions";
import {clearModal} from "../../../../../../redux/actions/modal";
import {connect} from "react-redux";
import plantsApi from "../../../../../../core/axios/api/plantsApi";
import {fetchUser} from "../../../../../../redux/actions/user";


class PlantCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            additionalOptionsOpen: false
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.dialogResult && this.props.dialogResult && this.props.modalId === 'confirmDeletion') {
            if (this.props.dialogResult.confirm === this.props.plant.id) {
                this.deletePlant();
            }
            this.props.clearModal();
        }

        if (!prevProps.dialogResult && this.props.dialogResult && this.props.modalId === 'editPlantNameModal') {
            if (this.props.dialogResult.confirm === this.props.plant.id && this.props.dialogResult.text) {
                this.updatePlantName(this.props.dialogResult.text);
            }
            this.props.clearModal();
        }
    }

    deletePlant = async () => {
        await plantsApi.deletePlant(this.props.plant.id);
        this.props.fetchUser();
    }

    updatePlantName = async plantName => {
        await plantsApi.addPlantInfo(this.props.plant.id, {plantName});
        this.props.fetchUser();
    }


    bodyClickListener = e => {
        if (e.target.closest('.additional-options') || e.target.classList.contains('additional-options')) {
            return;
        }
        e.stopPropagation();
        this.clearBodyClickBlocking();
    }

    onClickAdditionalOptions = e => {
        e.stopPropagation();
        this.setState({
            additionalOptionsOpen: true
        })

        document.addEventListener('click', this.bodyClickListener, true);
        document.body.classList.add('disable-click');
    }

    clearBodyClickBlocking = () => {
        this.setState({
            additionalOptionsOpen: false
        })
        document.removeEventListener('click', this.bodyClickListener, true);
        document.body.classList.remove('disable-click');
    }

    render() {
        const plant = this.props.plant;
        return(
            <Card size="l" mode="shadow">
                <div className="card">
                    <img src={plant.img} className="card__image"/>
                    <div className="card__text">
                        <p className="card__name">
                            {plant.name}
                        </p>
                        <p className="card__description">
                            {plant.description}
                        </p>
                    </div>
                    <IconButton className="card__menu" onClick={this.onClickAdditionalOptions}><Icon24MoreHorizontal/></IconButton>
                    { this.state.additionalOptionsOpen &&
                    <AdditionalOptions plant={plant} clearBodyClickBlocking={this.clearBodyClickBlocking}/>
                    }
                </div>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    modalId: state.modal.id,
    dialogResult: state.modal.dialogResult
});

export default connect(mapStateToProps, {clearModal, fetchUser})(PlantCard);
