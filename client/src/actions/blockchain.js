export const loadNetworks = (networks) => {
    return {
        type: "LOAD_NETWORKS",
        networks: networks
    };
};

export const updateNetworkSelection = (updatedNetworks) => {
    return {
        type: "UPDATE_NETWORK_SELECTION",
        updatedNetworks: updatedNetworks
    };
};

export const isLoading = () => {
    return {
        type: "IS_LOADING"
    };
};

export const calculateEstimatedTxCost = (estimatedPrice) => {
    return {
        type: "CALCULATE_ESTIMATED_TX_PRICE",
        estimatedPrice: estimatedPrice
    };
};

export const updateEstimatedTxCostValues = (estimatedPrice) => {
    return {
        type: "UPDATE_ESTIMATED_TX_COST_VALUES",
        estimatedPrice: estimatedPrice
    };
};

export const calculateEstimatedETHCost = (network, web3) => {
    return async (dispatch) => {
        dispatch(isLoading());
        try {
            const accounts = await web3.eth.getAccounts();
            let gasPrice = await web3.eth.getGasPrice();
            let estimatedGss = await web3.eth.estimateGas({from: accounts[0]});
            let estimatedPrice = web3.utils.fromWei((estimatedGss * gasPrice).toString());

            let estimatedTxCost = {
                "network": "ETH",
                "price": estimatedPrice
            };

            dispatch(calculateEstimatedTxCost(estimatedTxCost));
        } catch (e) {
            console.log("error");
            console.log(e);
        }
    };
};

export const getEstimatedBTCPrice = (network) => {
    return async (dispatch) => {
        dispatch(isLoading());
        try {
            let estimatedTxCost = {
                "network": "BTC",
                "price": 5.5
            };
            dispatch(calculateEstimatedTxCost(estimatedTxCost));
        } catch (e) {
            console.log("error");
            console.log(e);
        }
    };
};
