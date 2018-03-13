import { createSelector } from 'reselect';
import {includes as fp_includes} from 'lodash/fp';

export const selectVisibleLibs = createSelector(
  state=>state.libs.data,
  state=>state.libsFilter,
  (libs,libsFilter) => {
    const {isShowAllLibs,searchName} = libsFilter;
    if(searchName) {
      return libs.filter(v=>fp_includes(searchName,v[0]));
    }else {
      return isShowAllLibs ? libs : libs.slice(0,20);
    }
  }
);