const initialState = {
    networks: []
};

const blockchainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_NETWORKS":
            return {
                networks:  action.networks
            };
        case "UPDATE_NETWORKS":
            return {
                networks:  action.updatedNetworks
            };
        default:
            return state;
    }
};

export default blockchainReducer;