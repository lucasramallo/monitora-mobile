import { combineReducers } from 'redux';
import userReducer from './user/slice';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;