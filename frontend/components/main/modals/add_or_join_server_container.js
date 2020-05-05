import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import AddOrJoinServer from './add_or_join_server';

const mapStateToProps = state => ({
    errors: state.errors.server
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOrJoinServer);