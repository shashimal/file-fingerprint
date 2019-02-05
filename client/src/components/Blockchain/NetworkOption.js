import React, {Component} from "react";
import {connect} from 'react-redux';
import Checkbox from '../Form/Checkbox';
import networks from '../../common/networks';
import {loadNetworks,updateNetworks} from "../../actions/index";

class NetworkOption extends Component {

    onHandleCheckedElement = (event) => {
        let checkboxItems = this.props.blockchainObject.networks;

        checkboxItems.forEach(checkbox => {
            if (checkbox.value === event.target.value) {
                checkbox.isChecked = event.target.checked;
            }
        });

        this.props.updateNetworks(checkboxItems);
    };

    componentDidMount() {
        this.props.loadNetworks(networks);
    }

    render() {
        console.log(this.props.blockchainObject);
        let listOfNetworks = this.props.blockchainObject.networks.map((item) => {
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
        blockchainObject: state.blockchainObject
    }
};

export default connect(mapStateToProps, {loadNetworks,updateNetworks})(NetworkOption);