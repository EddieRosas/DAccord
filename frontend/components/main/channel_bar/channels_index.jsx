import React from 'react';
import { Route } from 'react-router-dom';

import ChannelsIndexFooterBarContainer from './channels_index_footer_bar_container'
import ChannelListContainer from './channel_list_container';

class ChannelsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="channels-index-container">
                <section id="channel-index">
                    <Route path="/channels/:serverId/:channelId" component={ChannelListContainer}/>
                </section>
                <ChannelsIndexFooterBarContainer />
            </div>
        )
    }
}

export default ChannelsIndex;