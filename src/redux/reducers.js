import {combineReducers} from 'redux';
import libs from './state/libs/reducer';
import libsFilter from './state/libsFilter/reducer';
import libDetails from './state/LibDetails/reducer';

export default combineReducers({libs, libsFilter, libDetails});