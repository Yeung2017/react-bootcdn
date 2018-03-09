import {FETCH_LIB_DETAILS_STARTED,FETCH_LIB_DETAILS_SUCCESS,FETCH_LIB_DETAILS_FAILURE} from './actionTypes';

const fetchLibDetailsStarted = () => ({
  type: FETCH_LIB_DETAILS_STARTED
});

const fetchLibDetailsSuccess = (data) => ({
  type: FETCH_LIB_DETAILS_SUCCESS,
  data
});

const fetchLibDetailsFailure = () => ({
  type: FETCH_LIB_DETAILS_FAILURE
});

export const fetchCurrentLibDetails = (libName) => (dispatch) => {
  dispatch(fetchLibDetailsStarted);
  const url = `https://api.bootcdn.cn/libraries/${libName}.min.json`;
  fetch(url).then(res=>{
    if(res.status !== 200) {
      dispatch(fetchLibDetailsFailure());
      throw new Error('Fail to get response with status ' + res.status);
    }
    return res.json();
  }).then(data=>dispatch(fetchLibDetailsSuccess(data)));
};