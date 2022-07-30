import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingsReducer from './greetings/reducers/reducers';

const rootReducer = combineReducers({
  greetings: greetingsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;