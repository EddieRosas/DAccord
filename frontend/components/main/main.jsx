import React from 'react';

import ServerIndexContainer from './server_bar/server_index_container';
import ModalContainer from '../main/modals/modal_container'


class ChannelsIndex extends React.Component {
    render() {
        return (
            <div className="main">
                <ServerIndexContainer />
                <ModalContainer />
                <div className="out-of-the-way">
                    <footer >
                        <span>
                            <img src={this.props.currentUser.imageUrl} alt='' />
                            <button onClick={() => this.props.logout(this.props.currentUser)}>Log Out</button>
                        </span>
                    </footer>
                </div>
            </div>
        )
    }
}

export default ChannelsIndex;