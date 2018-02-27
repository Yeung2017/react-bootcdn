import {connect} from 'react-redux';
import LibList from '../../components/LibList';

const mapStateToProps = (state) => ({data: state.libs.data});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LibList);
