import React from 'react';
import TopNavBar from '../../components/TopNavBar';

import './style.css';

const PageIndex = () => {
  return (
    <div className="page-index">
      <header className="page-index__header">
        <div className="container">
          <TopNavBar />
        </div>
      </header>
    </div>
  );
};

export default PageIndex;
