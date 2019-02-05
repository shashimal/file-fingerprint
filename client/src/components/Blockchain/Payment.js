import React, {Component} from 'react';

class Payment extends Component {

    render() {

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">Payment Details</div>
                    <div className="panel-body">
                        Total Cost: 175
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


export default Payment;