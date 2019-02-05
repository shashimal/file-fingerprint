
import {combineReducers} from 'redux';
import fileReducer from './fileReducer';
import fingerPrintReducer from './fingerpinrtReducer';
import blockchainReducer from './blockchainReducer';


const reducers = combineReducers(
    {
        fileObject: fileReducer,
        fingerprint: fingerPrintReducer,
        blockchainObject: blockchainReducer

    }
);

export default reducers;