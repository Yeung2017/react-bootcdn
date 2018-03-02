import {FETCH_LIBS_STARTED, FETCH_LIBS_SUCCESS, FETCH_LIBS_FAILURE} from './actionTypes';
import initialState from './initialState';
import {fetchStatus} from '../../../constants/fetchStatus';

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIBS_STARTED:
      return {
        ...state,
        ...{
          fetchStatus: fetchStatus.FETCHING
        }
      };
    case FETCH_LIBS_SUCCESS:
      return {
        ...state,
        ...{
          fetchStatus: fetchStatus.SUCCESS,
          isNoneffective: false,
          lastUpdated: + new Date(),
          data: action.data
        }
      };
    case FETCH_LIBS_FAILURE:
      return {
        ...state,
        ...{
          fetchStatus: fetchStatus.ERROR
        }
      };
    default:
      return state;
  }
};