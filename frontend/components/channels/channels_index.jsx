import React from 'react';
import ServerIndexContainer from '../navbar/server_index_container';

class ChannelsIndex extends React.Component {
    render () {
        return(
            <div>
                <header>
                    <h1>Hello,&nbsp;{this.props.currentUser.username}!</h1>
                    <img src={this.props.currentUser.imageUrl} alt=''/>
                    <button onClick={() => this.props.logout(this.props.currentUser)}>Log Out</button>
                </header>
                <ServerIndexContainer />
            </div>
        )
    }
}

export default ChannelsIndex;