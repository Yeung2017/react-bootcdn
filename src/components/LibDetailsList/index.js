import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const LibDetailsListCard = ({url}) => {
  return (
    <div className="c-LibDetailsListCard">
      <span className="c-LibDetailsListCard__url"><i className="iconfont icon-jiesuo"></i>{url}</span>
      <span className="c-LibDetailsListCard__copy-link">复制Link链接</span>
      <span className="c-LibDetailsListCard__copy-url">复制链接</span>
    </div>
  );
};

const LibDetailsListSubList = ({title, listData}) => {
  return (
    <div className="c-LibDetailsListSubList">
      <h3 className="c-LibDetailsListSubList__title">版本：{title}</h3>
      <ul className="c-LibDetailsListSubList__list">
        {listData.map((v, index) => (
          <li key={index} className="c-LibDetailsListSubList__item">
            <LibDetailsListCard url={v}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

const LibDetailsList = ({listData}) => {
  return (
    <div className="c-LibDetailsList">
      {listData.map((v, index) => (<LibDetailsListSubList key={index} title={v.version} listData={v.files}/>))}
    </div>
  );
};

LibDetailsList.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({version: PropTypes.string, files: PropTypes.array}))
};

LibDetailsList.defaultProps = {
  listData: [
    {
      version: "4.0.0",
      files: [
        "css/bootstrap-grid.css",
        "css/bootstrap-grid.min.css",
        "css/bootstrap-reboot.css",
        "css/bootstrap-reboot.min.css",
        "css/bootstrap.css",
        "css/bootstrap.min.css",
        "js/bootstrap.bundle.js",
        "js/bootstrap.bundle.min.js",
        "js/bootstrap.js",
        "js/bootstrap.min.js"
      ]
    }, {
      version: "4.0.0-beta.3",
      files: [
        "css/bootstrap-grid.css",
        "css/bootstrap-grid.min.css",
        "css/bootstrap-reboot.css",
        "css/bootstrap-reboot.min.css",
        "css/bootstrap.css",
        "css/bootstrap.min.css",
        "js/bootstrap.bundle.js",
        "js/bootstrap.bundle.min.js",
        "js/bootstrap.js",
        "js/bootstrap.min.js"
      ]
    }
  ]
};

export default LibDetailsList;