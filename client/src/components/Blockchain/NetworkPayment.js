import React, {Component} from 'react';
import PaymentItem from "./PaymentItem";
import {connect} from "react-redux";


class NetworkPayment extends Component {

    render() {
        let paymentDetails = this.props.estimate.map((price,index)=> {
            return (
                <div key={index}>
                    <PaymentItem price={price}/>
                </div>
            )
        });

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">Payment Details</div>
                    <div className="panel-body">
                        {paymentDetails}
                    </div>
                    <div className="btn-toolbar">
                        <button type="button" className="btn btn-primary">Cancel</button>
                        <button type="button" className="btn btn-primary">Pay Now</button>
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        estimate: state.blockchainObject.estimatedNetworkTxCost,
        networks: state.blockchainObject.networks,
        eth: state.ethObject
    }
};
export default connect(mapStateToProps, null)(NetworkPayment);