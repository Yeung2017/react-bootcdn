import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import LibListItem from './Item';

import './index.css';

const LibList = ({data}) => {
  return (
    <div className="c-LibList">
      <ul style={{marginBottom: 0}}>
        {data.map((v => (
          <li>
            <Link to="/"><LibListItem name={v[0]} desc={v[1]} star={[v[2]]}/></Link>
          </li>
        )))}
        <li>
          <LibListItem className="c-LibList__alllib">
            <span>所有开源列表</span>
          </LibListItem>
        </li>
      </ul>

    </div>
  );
};

LibList.propTypes = {
  data: PropTypes.array
};

LibList.defaultProps = {
  data: []
};

export default LibList;
