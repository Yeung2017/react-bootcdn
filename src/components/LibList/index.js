import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import LibListItem from './Item';

import './index.css';

const LibList = ({data, isShowAllLibLink}) => {
  return (
    <div className="c-LibList">
      <ul style={{
        marginBottom: 0
      }}>
        {data.map((v => (
          <li key={v[0]}>
            <Link to="/"><LibListItem name={v[0]} desc={v[1]} star={v[2]}/></Link>
          </li>
        )))}
        {isShowAllLibLink
          ? <li>
              <Link to="/all">
                <LibListItem className="c-LibList__alllib">
                  <span>所有开源列表</span>
                </LibListItem>
              </Link>
            </li>
          : null}
      </ul>

    </div>
  );
};

LibList.propTypes = {
  data: PropTypes.array,
  isShowAllLibLink: PropTypes.bool
};

LibList.defaultProps = {
  data: [],
  isShowAllLibLink: false
};

export default LibList;
