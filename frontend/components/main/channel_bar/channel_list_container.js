import { connect } from 'react-redux';

import ChannelList from './channel_list';
import { openModal } from '../../../actions/modal_actions';
import { serverChannelsSelector } from '../../../reducers/selectors';
import { fetchServer } from '../../../actions/server_actions';
import { fetchChannels } from '../../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
    return(
    {
    channels: Object.values(state.entities.channels),
    servers: state.entities.servers,
    currentUserId: state.session.currentUserId,
    }
    )
};

const mapDispatchToProps = dispatch => ({
    openModal: data => dispatch(openModal(data)),
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);