import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    // debugger
    return {
        errors: state.errors.session,
        formType: 'login',
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        processForm: (user) => dispatch(login(user)),
        demoLogin: user => dispatch(login(user)),
        clearErrors: () => dispatch(receiveErrors([]))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
