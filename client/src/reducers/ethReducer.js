const initialState = {
    web3: null,
    accounts: null,
    networkId: null,
    contracts: {}
};

const ethReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZE_DATA':
            return {
                ...state,
                web3: action.data.web3,
                accounts: action.data.accounts,
                networkId: action.data.networkId,
                contracts: action.data.contracts
            };
        default:
            return state;
    }

};

export default ethReducer;