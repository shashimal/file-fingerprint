import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import FileInfo from "./FileInfo";

class Uploader extends Component {

    constructor() {
        super()
        this.state = {
            files: []
        }
    }

    onDrop(files) {
        this.setState({files});
    }

    onCancel() {
        this.setState({
            files: []
        });
    }


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


        let fileDetails =  "";

        if(this.state.files.length > 0) {
            fileDetails =  <FileInfo file={this.state.files[0]}/>
        }

        return (

            <div>

                <Dropzone
                    multiple={false}
                    onDrop={this.onDrop.bind(this)}
                    onFileDialogCancel={this.onCancel.bind(this)}>

                    {({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles}) => {
                        let styles = {...baseStyle}
                        styles = isDragActive ? {...styles, ...activeStyle} : styles
                        styles = isDragReject ? {...styles, ...rejectStyle} : styles

                        return (
                            <div
                                {...getRootProps()}
                                style={styles}
                            >
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


            </div>
        );
    }

}

export default Uploader;