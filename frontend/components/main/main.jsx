import React from 'react';
import { Route } from 'react-router-dom';

import ServerDisplayContainer from './channel_bar/server_display_container'
import ServerIndexContainer from './server_bar/server_index_container';
import ChannelsIndexContainer from './channel_bar/channels_index_container';
import UsersIndexContainer from './users_bar/users_index_container';
import TopBarContainer from '../top_bar/top_bar_container';
import ModalContainer from '../main/modals/modal_container'
import MessagesDisplay from '../main/messages/messages_display';
import SocketConnectorContainer from "./socket_connector/socket_connector_container";



class Main extends React.Component {
    

    render() {
        return (
            <div className="main">
                <ModalContainer />
                <ServerIndexContainer />
                <div id="content-outer-container">
                    <div id="content-header-container">
                        <Route path="/channels/:serverId/" component={ServerDisplayContainer} />
                        <Route path="/channels/:serverId/" component={SocketConnectorContainer} />
                        <Route path="/channels/:serverId/:channelId" component={TopBarContainer} />
                    </div>
                    <div id="content-body-container">
                        <ChannelsIndexContainer />
                        <Route path="/channels/:serverId" component={MessagesDisplay} />
                        <Route path="/channels/:serverId/:channelId" component={UsersIndexContainer} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
