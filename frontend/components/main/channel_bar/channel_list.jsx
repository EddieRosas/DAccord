import React from 'react';

import ChannelListItemContainer from './channel_list_item_container';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal("addChannel");
  }

  componentDidMount() {

    // if (!!this.props.match.params.channelId) {
    //   this.props.fetchChannels(this.props.match.params.serverId);
    //   this.props.fetchUsers(this.props.match.params.serverId);
    // }
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.location.pathname !== this.props.location.pathname) {
    //   this.props.fetchChannels(this.props.match.params.serverId);
    // }

    // if (prevProps.match.params.serverId !== this.props.match.params.serverId ) {
    //     this.props.fetchUsers(this.props.match.params.serverId);
    // }
  }

  render() {
    if (Object.values(this.props.servers).length === 0) return null;
    const isOwner =
      this.props.servers[this.props.match.params.serverId].ownerId ===
      this.props.currentUserId;
    const channelListItems =
      this.props.channels.length > 0
        ? this.props.channels.map((channel) => (
            <ChannelListItemContainer
              key={channel.id}
              channel={channel}
              isOwner={isOwner}
            />
          ))
        : null;
        
    return (
      <div id="channel-list-container">
        <div id="channel-list-header-container">
          <h2 id="channel-list-header-text">Text Channels</h2>
        </div>
        {channelListItems}
      </div>
    );
  }
}

export default ChannelList;