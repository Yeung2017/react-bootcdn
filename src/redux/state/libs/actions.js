import {INVALIDATE_LIBS, UPDATE_LIBS, RECEIVE_POSTS_LIBS, REQUEST_POSTS_LIBS} from './actionTypes';

const shouldFetchPosts = (state) => {
  return !state.isFetching;
};

export const invalidateSubreddit = (didInvalidate) => ({type: INVALIDATE_LIBS, didInvalidate});

export const updateLibs = (data) => ({UPDATE_LIBS, data});

const receivePostsLibs = () => ({
  type: RECEIVE_POSTS_LIBS
});

const requestPostsLibs = () => ({
  type: REQUEST_POSTS_LIBS
});

const fetchPostsLibs = (subreddit) => {
  return dispatch => {
    dispatch(requestPostsLibs(subreddit));
    return fetch('https://api.bootcdn.cn/libraries.min.json')
      .then(response => response.json())
      .then(json => dispatch(receivePostsLibs(json)));
  };
};

export const fetchPostsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPostsLibs());
    }
  };
};