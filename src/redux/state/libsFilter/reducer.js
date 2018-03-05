import initialState from './initialState';
import {SET_LIBS_FILTER, SET_LIBS_SHOW_ALL} from './actionTypes';

export default(state=initialState,action) => {
  switch (action.type) {
    case SET_LIBS_FILTER:
      return {
        ...state,
        ...{searchName: action.searchName}
      };
    case SET_LIBS_SHOW_ALL:
      return {
        ...state,
        ...{isShowAllLibs: action.isLibsShowAll}
      };
    default:
      return state;
  }
};