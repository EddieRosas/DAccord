import { connect } from 'react-redux';

import ChannelList from './channel_list';
import { openModal } from '../../../actions/modal_actions';
import { fetchUsers } from "../../../actions/user_actions";
import { fetchChannels } from '../../../actions/channel_actions';
import { getChannelMessages } from "../../../actions/message_actions";

const mapStateToProps = (state, ownProps) => {
    return {
      channels: Object.values(state.entities.channels),
      servers: state.entities.servers,
      currentUserId: state.session.currentUserId,
      users: state.entities.users,
    };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (data) => dispatch(openModal(data)),
  fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
  fetchUsers: (serverId) => dispatch(fetchUsers(serverId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);