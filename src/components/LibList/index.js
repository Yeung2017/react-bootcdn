import React from 'react';
import PropTypes from 'prop-types';
import LibListItem from './Item';

import './index.css';

const LibList = () => {
  return (
    <div className="c-LibList">
      <LibListItem name="jquery" desc="jquery kasdsada" star = {1} />
      <LibListItem name="jquery" desc="jquery kasdsada" star = {1} />
      <LibListItem name="jquery" desc="jquery kasdsada" star = {1} />
      <LibListItem name="jquery" desc="jquery kasdsada" star = {1} />
      <LibListItem className="c-LibList__alllib"><span>所有开源列表</span></LibListItem>
    </div>
  );
};

LibList.propTypes = {
  a: PropTypes.string,
};

export default LibList;
