import { createSelector } from 'reselect';

export const selectVisibleLibs = createSelector(
  state=>state.libs.data,
  state=>state.libsFilter,
  (libs,libsFilter) => {
    const {isShowAllLibs,searchName} = libsFilter;
    if(searchName) {
      return libs.filter(v=>v[0]===searchName);
    }else {
      return isShowAllLibs ? libs : libs.slice(0,100);
    }
  }
);