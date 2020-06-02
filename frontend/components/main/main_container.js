import { connect } from 'react-redux';
import Main from './main';
import { withRouter } from 'react-router-dom'
import { logout } from '../../actions/session_actions';


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    
});

export default withRouter(connect(
    mapStateToProps,
    null
)(Main))