import React from 'react';
import TopNavBar from '../../components/TopNavBar';
import TitleCaption from '../../components/TitleCaption';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const PageIndex = () => {
  return (
    <div className="page-index">
      <header className="page-index__header">
        <div className="container">
          <TopNavBar />
          <TitleCaption title="BootCDN" subTitle="稳定、快速、免费的前端开源项目 CDN 加速服务" desc="共收录了 3318 个前端开源项目" />
        </div>
      </header>
    </div>
  );
};

export default PageIndex;
