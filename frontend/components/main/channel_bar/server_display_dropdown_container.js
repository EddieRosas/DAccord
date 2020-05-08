import { connect } from 'react-redux';

import ServerDisplayDropdown from './server_display_dropdown';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    isOwner: ownProps.isOwner
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    openModal: type => dispatch(openModal(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerDisplayDropdown);