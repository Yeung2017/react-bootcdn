import React from 'react';
import PropTypes from 'prop-types';
import MostPopularLibBarList from './List';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const MostPopularLibBar = ({data}) => {
  return (
    <div className="c-MostPopularLibBar">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-8">
            <MostPopularLibBarList data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

MostPopularLibBar.propTypes = {
  data: PropTypes.array
};

MostPopularLibBar.propTypes = {
  data: []
};

export default MostPopularLibBar;
