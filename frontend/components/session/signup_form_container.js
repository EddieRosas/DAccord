import { connect } from 'react-redux';
import { signup, login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        demoLogin: user => dispatch(login(user)),
        clearErrors: () => dispatch(receiveErrors([])),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);