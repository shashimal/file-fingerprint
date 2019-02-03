export const captureFile = (file) => {

    return {
        type: "CAPTURE_FILE",
        file: file
    }
};

export const readFileContent = (fileContent) => {

    return {
        type: "READ_FILE_CONTENT",
        fileContent: fileContent
    }
};

export const cancelFileUpload = ()=> {
    return {
        type: "CANCEL_FILE_UPLOAD"
    }
};