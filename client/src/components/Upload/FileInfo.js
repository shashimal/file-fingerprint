import React from 'react'

const FileInfo = (props) => {
    const lastModified = new Date(props.file.lastModified).toUTCString();
    return (

        <div>
            <br/>
            <aside>
                <div className="panel panel-default">
                    <div className="panel-heading">Uploaded File Information</div>
                    <div className="panel-body">

                        <p>Name: {props.file.name}</p>
                        <p>Size: {props.file.size}</p>
                        <p>Type: {props.file.type}</p>
                        <p>Last Modified: {lastModified}</p>
                    </div>
                </div>
            </aside>
        </div>
    );
};
export default FileInfo;