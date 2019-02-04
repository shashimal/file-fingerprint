import React from 'react';

const FingerprintOption = (props) => {

    return (
        <div>
            <div className="btn-toolbar">
                <button type="button" className="btn btn-primary" onClick={props.cancel}>Cancel</button>
                <button type="button" className="btn btn-primary">Certificate</button>
                <button type="button" className="btn btn-primary">Blockchain</button>
                <button type="button" className="btn btn-primary">Certificate & Blockchain</button>

            </div>
        </div>
    )
};
export default FingerprintOption;