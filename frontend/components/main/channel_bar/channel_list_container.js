import { connect } from 'react-redux';

import ChannelList from './channel_list';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {

    let channels = Object.values(state.entities.channels)
    channels = channels.filter(
      (channel) =>
        Number(channel.serverId) === Number(ownProps.match.params.serverId)
    )

    return ( 
      {
        channels: channels,
        servers: state.entities.servers,
        currentUserId: state.session.currentUserId,
      }
    )
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (data) => dispatch(openModal(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);