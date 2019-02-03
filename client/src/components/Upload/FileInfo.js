import React from 'react'

const FileInfo = (props) => {
    const fileObject = props.fileObject;
    console.log(fileObject)
    const file = fileObject.fileMetadata;
    const lastModified = new Date(file.lastModified).toUTCString();
    return (

        <div>
            <br/>
            <aside>
                <div className="panel panel-default">
                    <div className="panel-heading">Uploaded File Information</div>
                    <div className="panel-body">

                        <p>Name: {file.name}</p>
                        <p>Size: {file.size}</p>
                        <p>Type: {file.type}</p>
                        <p>Last Modified: {lastModified}</p>
                        <p>MD5: {fileObject.md5}</p>
                        <p>SHA1: {fileObject.sha1}</p>
                        <p>SHA256: {fileObject.sha256}</p>
                    </div>
                </div>
            </aside>
        </div>
    );
};
export default FileInfo;