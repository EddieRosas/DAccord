import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { createServer } from '../../../actions/server_actions'
import CreateServer from './create_server';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.currentUserId],
    errors: state.errors.server
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createServer: (serverForm) => dispatch(createServer(serverForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateServer);