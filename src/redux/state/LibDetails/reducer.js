import {FETCH_LIB_DETAILS_STARTED, FETCH_LIB_DETAILS_FAILURE, FETCH_LIB_DETAILS_SUCCESS} from './actionTypes';
import initialState from './initialState';
import {fetchStatus} from '../../../constants/fetchStatus';

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIB_DETAILS_STARTED:
      return {
        ...state,
        ...{
          fetchStatus: fetchStatus.FETCHING
        }
      };
    case FETCH_LIB_DETAILS_SUCCESS:
      return {
        ...state,
        ...{
          fetchStatus: fetchStatus.SUCCESS,
          isNoneffective: false,
          lastUpdated: + new Date(),
          data: action.data
        }
      };
    case FETCH_LIB_DETAILS_FAILURE:
      return {
        ...state,
        ...{
          fetchStatus: fetchStatus.ERROR,
          isNoneffective: true
        }
      };
    default:
      return state;
  }
};