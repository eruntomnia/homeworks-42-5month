import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { thunk } from 'redux-thunk';

import dataReducer from './reducers/reducer';

const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;
