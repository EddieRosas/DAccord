import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUserId)
});

const mapDispatchToProps = dispatch => ({
    demoLogin: user => dispatch(login(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(Splash);