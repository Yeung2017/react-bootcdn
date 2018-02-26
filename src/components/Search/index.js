import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      isFocus: false
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;
    this.setState({[name]: value});
    this
      .props
      .onChange();
  }

  handleSearchFocus = () => {
    this.setState({isFocus: true});
  }

  handleSearchBlur = () => {
    this.setState({isFocus: false});
  }

  handleClearIconClick = (e) => {
    this.setState({filter: ''});
  }

  handleSearchIconClick = () => {
    this
      .props
      .onSearchIconClick(this.state.filter);
  }

  render() {
    return (
      <div
        className={this.state.isFocus
        ? 'c-search is-active'
        : 'c-search'}>
        <input
          className="c-search__input"
          type="text"
          name="filter"
          placeholder="搜索开源库，例如：jquery"
          value={this.state.filter}
          onChange={this.handleInputChange}
          onFocus={this.handleSearchFocus}
          onBlur={this.handleSearchBlur}/>
        <i
          className={this.state.filter !== ''
          ? "iconfont icon-cuowuguanbiquxiao c-search__icon"
          : "iconfont icon-sousuo c-search__icon"}
          onClick={this.state.filter === ''
          ? this.handleSearchIconClick
          : this.handleClearIconClick}></i>
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func,
  onSearchIconClick: PropTypes.func
};

Search.defaultProps = {
  onChange: f => f,
  onSearchIconClick: f => f
};

export default Search;
