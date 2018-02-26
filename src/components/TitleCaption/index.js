import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const TitleCaption = ({title, subTitle, desc}) => {
  const cTitle = title
    ? <h1 className="c-TitleCaption__title">{title}</h1>
    : null;
  const cSubTitle = subTitle
    ? <h2 className="c-TitleCaption__subTitle">{subTitle}</h2>
    : null;
  const cDesc = desc
    ? <p className="c-TitleCaption__desc">{desc}</p>
    : null;
  return (
    <div className="c-TitleCaption">
      {cTitle}
      {cSubTitle}
      {cDesc}
    </div>
  );
};

TitleCaption.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  desc: PropTypes.string
};

TitleCaption.defaultProps = {
  title: '',
  subTitle: '',
  desc: ''
};

export default TitleCaption;
