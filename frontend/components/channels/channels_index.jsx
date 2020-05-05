import React from 'react';
import ServerIndexContainer from '../main/server_bar/server_index_container';
import ModalContainer from '../main/modals/modal_container'
// import Modal from '../main/modals/modal';

class ChannelsIndex extends React.Component {
    render () {
        return(
            <div className="main">
                <ServerIndexContainer />
                <ModalContainer />
                <div className="out-of-the-way">
                        <footer >
                            <span>
                                <img src={this.props.currentUser.imageUrl} alt=''/>
                                <button onClick={() => this.props.logout(this.props.currentUser)}>Log Out</button>
                            </span>
                        </footer>
                </div>
            </div>
        )
    }
}

export default ChannelsIndex;