import { connect } from 'react-redux';

import ChannelListItem from './channel_list_item';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    channel: ownProps.channel,
    isOwner: ownProps.isOwner
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    openModal: type => dispatch(openModal(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListItem);
