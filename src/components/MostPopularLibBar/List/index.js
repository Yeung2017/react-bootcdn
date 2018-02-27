import React from 'react';
import PropTypes from 'prop-types';
import MostPopularLibBarItem from '../Item';

import './index.css';

const MostPopularLibBarList = ({data}) => {
  return (
    <ul class="c-MostPopularLibBarList">
      {data.map((v) => (<MostPopularLibBarItem imgUrl={v.imgUrl} linkTo={v.linkTo} text={v.text}/>))}
    </ul>
  );
};

MostPopularLibBarList.propTypes = {
  data: PropTypes.array
};

MostPopularLibBarList.defaultProps = {
  data: []
};

export default MostPopularLibBarList;
