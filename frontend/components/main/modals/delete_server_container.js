import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { destroyServer } from '../../../actions/server_actions';
import DeleteServer from './delete_server';

const mapStateToProps = state => ({
    servers: state.entities.servers,
    errors: state.errors.server
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    deleteServer: server => dispatch(destroyServer(server))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteServer);