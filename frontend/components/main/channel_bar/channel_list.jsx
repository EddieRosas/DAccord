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
    //   debugger
    if (!!this.props.match.params.channelId) {
      this.props.fetchChannels(this.props.match.params.serverId);
      this.props.fetchUsers(this.props.match.params.serverId);
    //   if (Object.values(this.props.users) >= 2) {
    //     this.props.getChannelMessages(this.props.location.pathname.slice(-1));
    //   }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchChannels(this.props.match.params.serverId);
    }

    if (prevProps.match.params.serverId !== this.props.match.params.serverId ) {
        this.props.fetchUsers(this.props.match.params.serverId);
    }

    // if ( Object.values(this.props.users).length >= 2) {
    //   this.props.getChannelMessages(this.props.location.pathname.slice(-1));
    // }
  }

  render() {
    if (Object.values(this.props.servers).length === 0) return null;
    const isOwner =
      this.props.servers[this.props.match.params.serverId].owner_id ===
      this.props.currentUserId;
    const channelItems =
      this.props.channels.length > 0
        ? this.props.channels.map((channel) => (
            <ChannelListItemContainer
              key={channel.id}
              channel={channel}
              isOwner={isOwner}
            />
          ))
        : null;
    const addChannelButton = isOwner ? (
      <button id="channel-list-create-button" onClick={this.handleClick}>
        <svg
          id="channel-list-add-channel-icon"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="false"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#43B581"
            d="M21 11.001H13V3.00098H11V11.001H3V13.001H11V21.001H13V13.001H21V11.001Z"
          ></path>
        </svg>
        <div className="tooltip">Add Channel</div>
      </button>
    ) : null;

    return (
      <div id="channel-list-container">
        <div id="channel-list-header-container">
          <h2 id="channel-list-header-text">Text Channels</h2>
          {addChannelButton}
        </div>
        {channelItems}
      </div>
    );
  }
}

export default ChannelList;