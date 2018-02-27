import React from 'react';
import {Link} from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';
import TitleCaption from '../../components/TitleCaption';
import Search from '../../components/Search';
import MostPopularLibBar from '../../components/MostPopularLibBar';
import LibList from '../../components/LibList';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const mostPopularLibBarData = [
  {
    imgUrl: '/img/bootstrap.svg',
    LinkTo: '/',
    text: 'bootstrap'
  }, {
    imgUrl: '/img/react.svg',
    LinkTo: '/',
    text: 'react'
  }, {
    imgUrl: '/img/jquery.svg',
    LinkTo: '/',
    text: 'jquery'
  }, {
    imgUrl: '/img/angular-icon.svg',
    LinkTo: '/',
    text: 'angular'
  }, {
    imgUrl: '/img/vue.svg',
    LinkTo: '/',
    text: 'vue'
  }, {
    imgUrl: '/img/backbone-icon.svg',
    LinkTo: '/',
    text: 'backbone'
  }, {
    imgUrl: '/img/lodash.svg',
    LinkTo: '/',
    text: 'lodash'
  }, {
    imgUrl: '/img/momentjs.svg',
    LinkTo: '/',
    text: 'momentjs'
  }
];

const PageIndex = () => {
  return (
    <div className="page-index">
      <header className="page-index__header">
        <div className="container">
          <TopNavBar/>
          <TitleCaption
            title="BootCDN"
            subTitle="稳定、快速、免费的前端开源项目 CDN 加速服务"
            desc="共收录了 3318 个前端开源项目"/>
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <Search/>
            </div>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="page-index__MostPopularLibBar">
          <MostPopularLibBar data={mostPopularLibBarData}/>
        </div>
        <div className="page-index__notice">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-right">
                <Link to='/blog' className="page-index__notice-link">拒绝流量劫持，全面使用 HTTPS！</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="page-index__LibList">
          <div className="container">
            <LibList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageIndex;
