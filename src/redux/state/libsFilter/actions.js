import { SET_LIBS_FILTER, SET_LIBS_SHOW_ALL } from './actionTypes';

export const setLibsFilter = (searchName) => ({
  type: SET_LIBS_FILTER,
  searchName
});

export const setLibsShowAll = (isLibsShowAll) => ({
  type: SET_LIBS_SHOW_ALL,
  isLibsShowAll
});