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
    if(action.type === 'delete') {
        const newList = [...list.slice(0, action.idx), ...list.slice(action.idx+1, list.length)];
        return {
            ...state,
            list: newList
        }
    }
    return state;
};

export const rootReducer =  combineReducers({
    tempReducer: tempReducer
});