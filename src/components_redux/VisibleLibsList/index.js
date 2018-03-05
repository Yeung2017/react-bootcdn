import {connect} from 'react-redux';
import LibList from '../../components/LibList';

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.data || state.libs.data,
  isShowAllLibLink: typeof ownProps.isShowAllLibLink === 'boolean'
    ? ownProps.isShowAllLibLink
    : state.libsFilters.libsFilter
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LibList);
