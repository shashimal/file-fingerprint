const initialState = {
    fileMetadata: null,
    fileContent: null
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
                ...state, fileMetadata: null, fileContent: null
            };
        default:
            return state;

    }

};

export default fileReducer;