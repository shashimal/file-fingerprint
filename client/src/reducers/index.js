
import {combineReducers} from 'redux';
import fileReducer from './fileReducer';
import fingerPrintReducer from './fingerpinrtReducer';
import blockchainReducer from './blockchainReducer';
import ethReducer from './ethReducer'


const reducers = combineReducers(
    {
        fileObject: fileReducer,
        fingerprint: fingerPrintReducer,
        blockchainObject: blockchainReducer,
        ethObject: ethReducer

    }
);

export default reducers;