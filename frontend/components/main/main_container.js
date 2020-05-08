import { connect } from 'react-redux';
import Main from './main';
import { logout } from '../../actions/session_actions';


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
});


export default connect (
    mapStateToProps,
    null
)(Main)