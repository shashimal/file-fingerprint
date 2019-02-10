import React, {Component} from 'react'
import Header from './components/Header/Header'
import MainNavigation from "./components/Navigation/ManinNavigation";
import {connect} from 'react-redux';
import getWeb3 from "./utils/getWeb3";
import SimpleStorageContract from "./contracts/SimpleStorage";
import {initializeData} from './actions/index';

class Main extends Component {

    componentDidMount = async () => {
        try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId = await web3.eth.net.getId();

            const deployedNetwork = SimpleStorageContract.networks[networkId];
            const simpleStorage = new web3.eth.Contract(
                SimpleStorageContract.abi,
                deployedNetwork && deployedNetwork.address,
            );


            let initialData= {
                web3: web3,
                networkId:networkId,
                accounts: accounts,
                contracts: {
                    simpleStorage: simpleStorage
                }
            };



            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.props.initializeData(initialData);
            //this.setState({ web3, accounts, contract: instance }, this.runExample);
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }

    };

    render() {

        return (

            <div className='container'>
                <div className="row">
                    <Header/>
                    <MainNavigation/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blockchainObject: state.blockchainObject,
        ethObject: state.ethObject
    }
};

export default connect(mapStateToProps,{initializeData})(Main);