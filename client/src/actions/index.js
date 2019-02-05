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

export const setCryptoValues = (cryptoObject)=> {
    return {
        type: "SET_CRYPTO_VALUES",
        cryptoObject: cryptoObject

    }
};

export const selectFingerprintOption = (selectedOption) => {
    return {
        type: "SELECTED_FINGERPRINT_OPTION",
        selectedOption: selectedOption
    }
};

export const selectNetworks = (selectedNetworks) => {
    return {
        type: "SELECTED_NETWORKS",
        selectedNetworks: selectedNetworks
    }
};

export const loadNetworks = (networks) => {
    return {
        type: "LOAD_NETWORKS",
        networks: networks
    }
};

export const updateNetworks = (updatedNetworks) => {
    return {
        type: "UPDATE_NETWORKS",
        updatedNetworks: updatedNetworks
    }
};

