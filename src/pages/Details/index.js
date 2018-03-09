import React, {Component} from 'react';
import TopNavBar from '../../components/TopNavBar';
import TitleCaption from '../../components/TitleCaption';
import {connect} from 'react-redux';
import {get as fp_get} from 'lodash/fp';

import './style.css';

class PageDetails extends Component {
  render() {
    return (
      <div className="page-details">
        <div className="page__header page-details__header">
          <div className="container">
            <TopNavBar/>
            <TitleCaption title={this.props.title} subTitle={this.props.subTitle}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: fp_get('libDetails.data.name', state),
  subTitle: fp_get('libDetails.data.description', state)
});

const mapDispatchToProps = {};

export {PageDetails};

export default connect(mapStateToProps, mapDispatchToProps)(PageDetails);
