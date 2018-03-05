import { SET_LIBS_FILTER, SET_LIBS_SHOW_ALL } from './actionTypes';

export const setLibsFilter = (libsFilter) => ({
  type: SET_LIBS_FILTER,
  libsFilter
});

export const setLibsShowAll = (isLibsShowAll) => ({
  type: SET_LIBS_SHOW_ALL,
  isLibsShowAll
});