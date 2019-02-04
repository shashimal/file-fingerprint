import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import FileInfo from "./FileInfo";
import {connect} from 'react-redux';
import CryptoJS from 'crypto-js';

import {captureFile, readFileContent, cancelFileUpload,setCryptoValues} from '../../actions/index'
import FingerprintOption from "../FingerprintOption";

class Uploader extends Component {


    onDrop = (files) => {
        if (files.length > 0) {
            this.props.captureFile(files[0]);
            this.readFile(files[0]);


        }
    };

    readFile = (file) => {
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            let result  = Buffer(reader.result)
            this.props.readFileContent(result);

            this.props.setCryptoValues(this.generateCryptoValues(result));

        }
    };

    onCancel = () => {
        this.props.cancelFileUpload();
    };

    generateCryptoValues = (file) => {

        const cryptoOjbect = {
            md5: CryptoJS.MD5(file).toString(),
            sha1: CryptoJS.SHA1(file).toString(),
            sha256: CryptoJS.SHA256(file).toString(),
        };
        console.log(cryptoOjbect)
        return cryptoOjbect;

    };


    render() {
        const baseStyle = {
            width: 1160,
            height: 200,
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5
        };
        const activeStyle = {
            borderStyle: 'solid',
            borderColor: '#6c6',
            backgroundColor: '#eee'
        };
        const rejectStyle = {
            borderStyle: 'solid',
            borderColor: '#c66',
            backgroundColor: '#eee'
        };


        let fileDetails = "";
        let fingerprintOptions = "";

        if (this.props.fileObject.fileMetadata != null) {
            fileDetails = <FileInfo fileObject={this.props.fileObject}/>
            fingerprintOptions = <FingerprintOption cancel={this.onCancel}/>

        }

        return (

            <div>

                <Dropzone
                    multiple={false}
                    onDrop={this.onDrop}
                    onFileDialogCancel={this.onCancel.bind(this)}>

                    {({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles}) => {
                        let styles = {...baseStyle}
                        styles = isDragActive ? {...styles, ...activeStyle} : styles
                        styles = isDragReject ? {...styles, ...rejectStyle} : styles

                        return (
                            <div {...getRootProps()} style={styles}>
                                <input {...getInputProps()} />
                                <div>
                                    {isDragAccept ? 'Drop' : 'Drag'} files here...
                                </div>
                                {isDragReject && <div>Unsupported file type...</div>}
                            </div>
                        )
                    }}
                </Dropzone>

                {fileDetails}
                {fingerprintOptions}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fileObject: state.fileObject
    }
};


export default connect(mapStateToProps, {captureFile, readFileContent, cancelFileUpload,setCryptoValues})(Uploader);