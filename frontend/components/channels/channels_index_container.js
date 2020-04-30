import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    logout: (currentUser) => dispatch(logout(currentUser))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ChannelsIndex)