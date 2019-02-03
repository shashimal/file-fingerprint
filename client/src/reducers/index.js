
import {combineReducers} from 'redux';
import fileReducer from './fileReducer';


const reducers = combineReducers(
    {
        fileObject: fileReducer,

    }
);

export default reducers;