import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

import './style.css';

const TopNavBar = () => {
  return (
    <div className="c-topnavbar">
      <Logo />
      <ul className="c-topnavbar__nav-link">
        <li>
          <Link to="/api" className="nav-link__item">Api</Link>
        </li>
        <li>
          <Link to="/blog" className="nav-link__item">博客</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link__item">关于</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNavBar;
