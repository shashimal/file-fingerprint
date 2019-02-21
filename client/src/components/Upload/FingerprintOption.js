import React, {Component} from 'react';
import { Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectFingerprintOption,loadNetworks} from '../../actions/index';
import networks from "../../common/networks";


class FingerprintOption extends Component {

    onGenerateCertificate = ()=> {
        this.props.selectFingerprintOption("certificate");
    };

    onSendToBlockchain = () => {
        this.props.selectFingerprintOption("blockchain");
        this.props.loadNetworks(networks);
        this.props.history.push('/blockchain')
    };

    onCertificateAndBlockchain = ()=> {
        this.props.selectFingerprintOption("both");
    };


    render() {
        return (
        <div>

            <div className="btn-toolbar">
                <button type="button" className="btn btn-primary" onClick={this.props.cancel}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={this.generateCertificate}>Certificate</button>
                <button type="button" className="btn btn-primary" onClick={this.onSendToBlockchain}>Blockchain</button>
                <button type="button" className="btn btn-primary" onClick={this.certificateAndBlockchain}>Certificate & Blockchain</button>

            </div>
        </div>
        )

    }
}
export default connect(null,{selectFingerprintOption,loadNetworks}) ( withRouter(FingerprintOption));