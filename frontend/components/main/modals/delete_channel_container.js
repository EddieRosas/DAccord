import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { deleteChannel } from '../../../actions/channel_actions'
import DeleteChannel from './delete_channel';

const mapStateToProps = state => ({
    channels: state.entities.channels
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    deleteChannel: channel => dispatch(deleteChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteChannel);