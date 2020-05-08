import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { createChannel } from '../../../actions/channel_actions'
import CreateChannel from './create_channel';

const mapStateToProps = state => ({
    errors: state.errors.channel
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannel);