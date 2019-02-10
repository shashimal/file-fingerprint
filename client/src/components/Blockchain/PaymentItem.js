import React, {Component} from 'react';

class PaymentItem extends Component {

    render() {
        return (
            <div>
                <p>Network: {this.props.price.network} Estimated Price: {this.props.price.price}</p>
            </div>
        );
    }
};
export default PaymentItem;