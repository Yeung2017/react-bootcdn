import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchLibDetails } from '../../redux/state/LibDetails/action';
import TopNavBar from '../../components/TopNavBar';
import TitleCaption from '../../components/TitleCaption';
import LinkNavBar from '../../components/LinkNavBar';
import VsibleLibDetailsList from '../../components_redux/VsibleLibDetailsList';
import {get as fp_get} from 'lodash/fp';
import {linkNavBarData} from '../../constants/linkNavBarData';

import './style.css';

class PageDetails extends Component {
  componentDidMount() {
    this.props.fetchLibDetails(this.props.match.params.id);
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className="page-details">
        {/* header */}
        <div className="page__header page-details__header">
          <div className="container">
            <TopNavBar/>
            <TitleCaption title={this.props.title} subTitle={this.props.subTitle}/>
          </div>
        </div>
        {/* header end */}
        {/* NavBar */}
        <LinkNavBar listData={linkNavBarData}/> {/* NavBar end */}
        {/* main */}
        <div className="page-details__main">
          <div className="container">
            <VsibleLibDetailsList/>
          </div>
        </div>
        {/* main end */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: fp_get('libDetails.data.name', state),
  subTitle: fp_get('libDetails.data.description', state)
});

const mapDispatchToProps = dispatch => ({
  fetchLibDetails: (libName)=>dispatch(fetchLibDetails(libName))
});

export {PageDetails};

export default connect(mapStateToProps, mapDispatchToProps)(PageDetails);
