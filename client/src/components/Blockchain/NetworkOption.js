import React, {Component} from "react";
import {connect} from "react-redux";
import Checkbox from '../Form/Checkbox';
import {
    updateNetworkSelection,
    calculateEstimatedETHCost,
    updateEstimatedTxCostValues, getEstimatedBTCPrice
} from "../../actions/index";

class NetworkOption extends Component {

    onHandleCheckedElement = (event) => {
        let networks = this.props.networks;

        networks.forEach(checkbox => {
            if (checkbox.value === event.target.value) {
                checkbox.isChecked = event.target.checked;
            }
        });

        this.props.updateNetworkSelection(networks);

        if (event.target.checked) {
            if (event.target.value === "ETH") {
                this.props.calculateEstimatedETHCost(event.target.value, this.props.eth.web3);
            }
            if (event.target.value === "BTC") {
                this.props.getEstimatedBTCPrice(event.target.value);
            }
        } else {
            let updatedTxCostValues = this.props.estimatedNetworkTxCost.filter(item => item.network !== event.target.value);
            this.props.updateEstimatedTxCostValues(updatedTxCostValues);
        }
    };

    render() {
        let listOfNetworks = this.props.networks.map((item) => {
            return (
                <div className="checkbox" key={item.id}>
                    <label>
                        <Checkbox {...item} handleCheckedElement={this.onHandleCheckedElement}/>
                        {item.value}
                    </label>
                </div>)
        });
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">Blockchain Networks</div>
                    <div className="panel-body">
                        {listOfNetworks}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        networks: state.blockchainObject.networks,
        estimatedNetworkTxCost: state.blockchainObject.estimatedNetworkTxCost,
        eth: state.ethObject
    }
};

export default connect(mapStateToProps,
    {
        updateNetworkSelection,
        calculateEstimatedETHCost,
        getEstimatedBTCPrice,
        updateEstimatedTxCostValues
    })(NetworkOption);