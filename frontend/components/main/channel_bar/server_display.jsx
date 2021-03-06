import React from 'react';
import ServerDisplayDropdownContainer from './server_display_dropdown_container';

class ServerNameButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ selected: !this.state.selected })
    }

    render() {
        const serverId = this.props.match.params.serverId;
        let id, label, isOwner, serverNameDropdown;
        
        if (serverId === "@me")
            label = "Home";
        else {
            id = Number(serverId);
            label = this.props.servers[id] ? this.props.servers[id].name : "";
        }
        if (this.props.servers[serverId]) {
            isOwner = this.props.servers[serverId].ownerId === this.props.currentUserId;
            serverNameDropdown = <ServerDisplayDropdownContainer isOwner={isOwner} />
        } else {
            serverNameDropdown = null;
        }

        return (
            <section id="server-name-button" tabIndex="1" onClick={this.handleClick}>
                <span>{label}</span>
                <i id="server-name-dropdown-icon" className="fa fa-chevron-down"></i>
                {serverNameDropdown}
            </section>
        )
    }
}

export default ServerNameButton;