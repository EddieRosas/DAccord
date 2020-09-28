
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../../actions/modal_actions';
import { joinServer } from '../../../actions/server_actions';
import JoinServer from './join_server';
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => ({
    errors: state.errors.server
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    joinServer: (server) => dispatch(joinServer(server))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(JoinServer)
);