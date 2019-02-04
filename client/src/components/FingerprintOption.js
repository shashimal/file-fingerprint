import React from 'react';

const FingerprintOption = (props) => {

    return (
        <div>
            <div className="btn-toolbar">
                <button type="button" className="btn btn-primary" onClick={props.cancel}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={props.generateCertificate}>Certificate</button>
                <button type="button" className="btn btn-primary" onClick={props.sendToBlockchain}>Blockchain</button>
                <button type="button" className="btn btn-primary" onClick={props.certificateAndBlockchain}>Certificate & Blockchain</button>

            </div>
        </div>
    )
};
export default FingerprintOption;