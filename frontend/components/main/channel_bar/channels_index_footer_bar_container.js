import { connect } from 'react-redux';

import { logout } from '../../../actions/session_actions';
import ChannelsIndexFooterBar from './channels_index_footer_bar';

const mapStateToProps = (state) => ({
    servers: state.entities.servers,
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    logout: (currentUser) => dispatch(logout(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsIndexFooterBar);