import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import './index.css';

const LinkNavBarItem = ({text, iconFontClass, to}) => {
  const icon = iconFontClass
    ? <i className={iconFontClass}></i>
    : null;
  return (
    <Link className="c-LinkNavBarItem__link" to={to}>{icon}{text}</Link>
  );
};

const LinkNavBarList = ({listData}) => {
  return (
    <ul className="c-LinkNavBarList">
      {listData.map((item, index) => (
        <li className="c-LinkNavBarList__item" key={index}><LinkNavBarItem
          text={item.text}
          iconFontClass={item.iconFontClass}
          to={item.to}/></li>
      ))}
    </ul>
  );
};

const LinkNavBar = ({listData}) => {
  return (
    <div className="c-LinkNavBar">
      <div className="container">
        <Row type="flex" justify="center">
          <Col md={16}>
            <LinkNavBarList listData={listData}/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

LinkNavBar.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string, iconFontClass: PropTypes.string, to: PropTypes.string}))
};

LinkNavBar.defaultProps = {
  listData: []
};

export default LinkNavBar;