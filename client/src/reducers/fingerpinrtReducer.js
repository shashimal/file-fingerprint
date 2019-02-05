const initialState = {
  selectedFingerprintOption: null,
};

const fingerPrintReducer = (state = initialState, action) => {


    switch (action.type) {
        case "SELECTED_FINGERPRINT_OPTION":
            return {
                ...state,selectedFingerprintOption: action.selectedOption
            };
        default:
            return state;

    }
};
export default fingerPrintReducer;