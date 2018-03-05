import {combineReducers} from 'redux';
import libs from './state/libs/reducer';
import libsFilters from './state/libsFilter/reducer';

export default combineReducers({libs, libsFilters});