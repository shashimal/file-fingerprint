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
