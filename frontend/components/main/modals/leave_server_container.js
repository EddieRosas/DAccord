import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { leaveServer } from '../../../actions/server_actions';
import LeaveServer from './leave_server';

const mapStateToProps = state => ({
    servers: state.entities.servers,
    session: state.session,
    errors: state.errors.server
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    leaveServer: (serverId, userId) => dispatch(leaveServer(serverId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaveServer);
