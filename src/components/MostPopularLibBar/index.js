import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';
import MostPopularLibBarList from './List';

import './index.css';

const MostPopularLibBar = ({data}) => {
  return (
    <div className="c-MostPopularLibBar">
      <div className="container">
        <Row type="flex" justify="center">
          <Col md={16}>
            <MostPopularLibBarList data={data}/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

MostPopularLibBar.propTypes = {
  data: PropTypes.array
};

MostPopularLibBar.defaultProps = {
  data: []
};

export default MostPopularLibBar;
