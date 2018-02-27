import {REQUEST_POSTS_LIBS, RECEIVE_POSTS_LIBS, UPDATE_LIBS, INVALIDATE_LIBS} from './actionTypes';
import initialState from './initialState';

export default(state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS_LIBS:
      return {
        ...state,
        ...{
          isFetching: true
        }
      };
    case RECEIVE_POSTS_LIBS:
      return {
        ...state,
        ...{
          isFetching: false
        }
      };
    case UPDATE_LIBS:
      return {
        ...state,
        ...{
          data: action.data
        }
      };
    case INVALIDATE_LIBS:
      return {
        ...state,
        ...{
          didInvalidate: action.didInvalidate
        }
      };
    default:
      return state;
  }
};