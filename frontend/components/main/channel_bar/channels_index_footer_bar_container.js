import { connect } from 'react-redux';

import { logout } from '../../../actions/session_actions';
import ChannelsIndexFooterBar from './channels_index_footer_bar';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    logout: (currentUser) => dispatch(logout(currentUser)),
    openModal: type => dispatch(openModal(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsIndexFooterBar);