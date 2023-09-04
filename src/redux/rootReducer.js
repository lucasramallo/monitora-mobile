import { combineReducers } from 'redux';
import userReducer from './user/slice';
import workloadReducer from './workload/slice';

const rootReducer = combineReducers({ userReducer, workloadReducer });

export default rootReducer;