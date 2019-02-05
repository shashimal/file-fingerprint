import React, {Component} from 'react';
import NetworkOption from "./NetworkOption";
import Header from "./Header";
import Payment from "./Payment";
import {connect} from "react-redux";


class Blockchain extends Component {

    render() {

        let paymentDetails = "";
        let selectedNetWorks = this.props.blockchainObject.networks.filter((network)=> {return network.isChecked === true});
        if(selectedNetWorks.length > 0) {
            paymentDetails = <Payment/>;
        }

        return (
            <div>
                <Header/>
                <NetworkOption/>
                {paymentDetails}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blockchainObject: state.blockchainObject
    }
};


export default connect(mapStateToProps,null) (Blockchain);