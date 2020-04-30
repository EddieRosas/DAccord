import React from 'react';
import AtMe from '../@me/@me'

class ChannelsIndex extends React.Component {
    render () {
        return(
            <div>
                <header>
                    <h1>Hello,&nbsp;{this.props.currentUser.username}!</h1>
                    <button onClick={() => this.props.logout(this.props.currentUser)}>Log Out</button>
                </header>
                <AtMe />
            </div>
        )
    }
}

export default ChannelsIndex;