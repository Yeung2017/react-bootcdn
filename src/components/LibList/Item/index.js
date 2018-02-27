import React from 'react';
import {Row, Col} from 'antd';
import PropTypes from 'prop-types';

import './index.css';

const LibListItem = ({name, desc, star, className, children}) => {
  if(children) {
    return (
      <div className={`c-LibListItem ${className}`}>
        {children}
      </div>
    );
  }
  return (
    <div className={`c-LibListItem ${className}`}>
      <Row type="flex" justify="center" align="top">
        <Col xs={24} md={6} className="c-LibListItem__title">
          {name}
        </Col>
        <Col xs={24} md={18} className="c-LibListItem__content">
          <Row>
            <Col xs={24} className="c-LibListItem__desc">
              {desc}
            </Col>
            <Col xs={24} className="c-LibListItem__star">
              <i className="iconfont icon-shoucang-xianxing"></i>{star}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

LibListItem.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  star: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

LibListItem.defaultProps = {
  name: '',
  desc: '',
  star: 0,
  className: ''
};

export default LibListItem;
