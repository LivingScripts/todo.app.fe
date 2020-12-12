import { combineReducers } from 'redux';

const list = [
    'lorem ipsum dolor sit amet',
    'lorem ipsum dolor sit amet',
    'lorem ipsum dolor sit amet',
    'lorem ipsum dolor sit amet',
    'lorem ipsum dolor sit amet',
    'lorem ipsum dolor sit amet',
];

const tempReducer = (state={list}, action='') => {
    return state;
};

export const rootReducer =  combineReducers({
    tempReducer: tempReducer
});