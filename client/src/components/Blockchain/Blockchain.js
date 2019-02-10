import React, {Component} from 'react';
import NetworkOption from "./NetworkOption";
import Header from "./Header";
import {connect} from "react-redux";
import networks from "../../common/networks";
import {loadNetworks} from "../../actions/index";
import NetworkPayment from "./NetworkPayment";

class Blockchain extends Component {

    componentDidMount() {
        this.props.loadNetworks(networks);
    }

    render() {
        let networkPayment = "";
        let selectedNetworks = this.props.networks.filter(network => network.isChecked === true);

        if (selectedNetworks.length > 0) {
            networkPayment = <NetworkPayment/>;
        }

        return (
            <div>
                <Header/>
                <NetworkOption/>
                {networkPayment}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        networks: state.blockchainObject.networks
    }
};
export default connect(mapStateToProps, {loadNetworks})(Blockchain);