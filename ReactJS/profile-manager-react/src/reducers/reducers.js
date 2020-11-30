
import {combineReducers} from 'redux';
import profileReducer from './profile-reducers';

const reducers = combineReducers({
    profiles:profileReducer
})

export default reducers;