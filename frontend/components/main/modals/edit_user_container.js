import { connect } from 'react-redux';

import EditUser from './edit_user';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { updateUser } from '../../../actions/user_actions'

const mapStateToProps = state => {
    return(
        {
            currentUser: state.entities.users[state.session.currentUserId]
        }    )
};

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    updateUser: (user, id) => dispatch(updateUser(user, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);