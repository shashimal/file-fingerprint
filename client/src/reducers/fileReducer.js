const initialState = {
    fileMetadata: null,
    fileContent: null,
    md5: null,
    sha1: null,
    sha256: null
};


const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  "CAPTURE_FILE":
            return {
                ...state, fileMetadata: action.file
            };
        case "READ_FILE_CONTENT":
            return {
                ...state, fileContent: action.fileContent
            };
        case "CANCEL_FILE_UPLOAD":
            return {
                ...state, fileMetadata: null, fileContent: null,sha1: null, sha256: null,md5: null
            };
        case "SET_CRYPTO_VALUES":
            return {
                ...state, sha1: action.cryptoObject.sha1, sha256: action.cryptoObject.sha256,md5: action.cryptoObject.md5
            };
        default:
            return state;

    }

};

export default fileReducer;