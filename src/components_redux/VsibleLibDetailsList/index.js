import {connect} from 'react-redux';
import LibDetailsList from '../../components/LibDetailsList';

const mapStateToProps = state => ({
  listData: state.libDetails.data.assets
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LibDetailsList);
