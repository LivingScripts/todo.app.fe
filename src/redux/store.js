import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/index';
// import saga from 'redux-saga';
// import mysaga from './sagas/';

// const sagaMidware = saga();
export const store = createStore(rootReducer, /*sagaMidware*/);
// sagaMidware.run(mysaga);