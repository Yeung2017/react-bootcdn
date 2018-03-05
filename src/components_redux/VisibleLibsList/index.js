import {connect} from 'react-redux';
import LibList from '../../components/LibList';
import { selectVisibleLibs } from '../../redux/reselectors/visibleLibs';

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.data || selectVisibleLibs(state),
  isShowAllLibLink: typeof ownProps.isShowAllLibLink === 'boolean'
    ? ownProps.isShowAllLibLink
    : !state.libsFilter.isShowAllLibs
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LibList);
