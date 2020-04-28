import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUserId)
});

const mapDispatchToProps = dispatch => ({
    demoLogin: () => dispatch(login({email: "demo@daccord.com", password: 'password'}))
});


export default connect(mapStateToProps, mapDispatchToProps)(Splash);