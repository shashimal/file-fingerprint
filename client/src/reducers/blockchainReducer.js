const initialState = {
    networks: [],
    estimatedNetworkTxCost: [],
    isLoading: false
};

const blockchainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_NETWORKS":
            return {
                ...state, networks: action.networks, isLoading: false
            };
        case "UPDATE_NETWORK_SELECTION":
            return {
                ...state, networks: action.updatedNetworks, isLoading: false
            };
        case "IS_LOADING":
            return {
                ...state, isLoading: true
            };
        case "CALCULATE_ESTIMATED_TX_PRICE":
            let currentEstimatedNetworkPrice = state.estimatedNetworkTxCost;
            return {
                ...state,
                estimatedNetworkTxCost: [...currentEstimatedNetworkPrice, action.estimatedPrice],
                isLoading: false
            };
        case "UPDATE_ESTIMATED_TX_COST_VALUES":
            return {
                ...state, estimatedNetworkTxCost: action.estimatedPrice, isLoading: false
            };
        default:
            return state;
    }
};

export default blockchainReducer;