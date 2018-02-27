import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.css';

const MostPopularLibBarItem = ({imgUrl, linkTo, text}) => {
  return (
    <li className="c-MostPopularLibBar-item">
      <Link to={linkTo} className="c-MostPopularLibBarItem__link" title={text}>
        <img className="c-MostPopularLibBarItem__img" src={imgUrl} alt={text} />
      </Link>
    </li>
  );
};

MostPopularLibBarItem.propTypes = {
  imgUrl: PropTypes.string,
  linkTo: PropTypes.string,
  text: PropTypes.string
};

MostPopularLibBarItem.defaultProps = {
  imgUrl: '',
  linkTo: '',
  text: ''
};

export default MostPopularLibBarItem;