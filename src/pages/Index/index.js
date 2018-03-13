import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import TopNavBar from '../../components/TopNavBar';
import TitleCaption from '../../components/TitleCaption';
import Search from '../../components/Search';
import MostPopularLibBar from '../../components/MostPopularLibBar';
import VisibleLibsList from '../../components_redux/VisibleLibsList';
import store from '../../redux/store';
import {fetchLibs} from '../../redux/state/libs/actions';
import {setLibsFilter, setLibsShowAll} from '../../redux/state/libsFilter/actions';
import {once as fp_once, debounce as fp_debounce} from 'lodash/fp';
import {mostPopularLibBarData} from '../../constants/mostPopularLibBarData';

import './style.css';

class PageIndex extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = fp_debounce(400,(filter)=>store.dispatch(setLibsFilter(filter))); 
  }
  handleOnceFetchLibs = fp_once(() => {
    store.dispatch(fetchLibs());
  })
  handleOnceFetchLibsIfNeed = () => {
    (this.props.match.url === '/' || this.props.match.url === '/all') && this.handleOnceFetchLibs();
  }
  handleSetLibsShowAll = () => {
    this.props.match.params.all === 'all'
      ? store.dispatch(setLibsShowAll(true))
      : store.dispatch(setLibsShowAll(false));
  }
  componentDidMount() {
    this.handleSetLibsShowAll();
    this.handleOnceFetchLibsIfNeed();
  }
  componentDidUpdate() {
    this.handleSetLibsShowAll();
    this.handleOnceFetchLibsIfNeed();
  }
  render() {
    return (
      <div className="page-index">
        {/* header */}
        <header className="page__header page-index__header">
          <div className="container">
            <TopNavBar/>
            <TitleCaption
              title="BootCDN"
              subTitle="稳定、快速、免费的前端开源项目 CDN 加速服务"
              desc="共收录了 3318 个前端开源项目"/>
            <Row type="flex" justify="center">
              <Col md={16}>
                <Search onChange={filter=>this.handleSearchChange(filter)} />
              </Col>
            </Row>
          </div>
        </header>
        {/* header end */}
        {/* main */}
        <div className="main">
          <div className="page-index__MostPopularLibBar">
            <MostPopularLibBar data={mostPopularLibBarData}/>
          </div>
          <div className="page-index__notice">
            <div className="container">
              <Link to='/blog' className="page-index__notice-link">拒绝流量劫持，全面使用 HTTPS！</Link>
            </div>
          </div>
          <div className="page-index__LibList">
            <div className="container">
              <VisibleLibsList/>
            </div>
          </div>
        </div>
        {/* main end */}
      </div>
    );
  }
}

export default PageIndex;
