import {FETCH_LIBS_STARTED, FETCH_LIBS_SUCCESS, FETCH_LIBS_FAILURE} from './actionTypes';

export const fetchLibsStarted = () => ({type: FETCH_LIBS_STARTED});

export const fetchLibsSuccess = (data) => ({type: FETCH_LIBS_SUCCESS, data});

export const fetchLibsFailure = () => ({type: FETCH_LIBS_FAILURE});

export const fetchLibs = () => (dispatch) => {
  dispatch(fetchLibsStarted());
  const url = 'https://api.bootcdn.cn/libraries.min.json';
  fetch(url).then(res => {
    if (res.status !== 200) {
      dispatch(fetchLibsFailure());
      throw new Error('Fail to get response with status ' + res.status);
    }
    return res.json();
  }).then(data => dispatch(fetchLibsSuccess(data)));
};