import React from 'react';
import { Link } from 'react-router-dom'

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)

        this.handleAddOrJoinClick = this.handleAddOrJoinClick.bind(this);
    }
    
    
    componentDidMount() {
        this.props.fetchServers();
    }

    handleAddOrJoinClick(e) {
        e.preventDefault();
        this.props.openModal();
    }

    nameAbrv (serverName) {
        let chars = serverName.split();
        let newName = chars[0]
        let nextChar = Math.floor(Math.random() * chars.slice(1))
        for (let i = 0; i < 4; i++) {
            newName += nextChar;
        }

        return newName;
    }

    serverIcon (server) {
        if (server.imageUrl) {
            return (
                <img className="server-list-item" src={server.imageUrl} alt="" />
            )
        } else {

            return (
                <div className="server-list-item"></div> 
            )
        }
    }

    render () {
        return (
            <div className="server-list" >
                <Link className="server-list-item at-me" to="/channels/@me">
                    <img src={window.atMe} alt="@me-link-icon"/>
                </Link>
                <ul>
                    <div className="separator"></div>
                    {this.props.servers.map(server => (
                        // <Link to={`channels/${server.id}`}>{server.name}</Link>
                        <li>
                            <img className="server-list-item" src={server.imageUrl} alt="" />
                            <p className="server-list-item-label">{server.name}</p>

                        </li>
                    ))} 
                    <div className="server-list-item add-or-join-server" >
                        <a onClick={this.handleAddOrJoinClick}>
                            <svg
                                aria-hidden="false" 
                                width="24" height="24" 
                                viewBox="0 0 24 24">
                                    <path 
                                        d="M21 11.001H13V3.00098H11V11.001H3V13.001H11V21.001H13V13.001H21V11.001Z">
                                    </path>
                            </svg>
                        </a>
                    </div>
                    <div className="add-or-join-hover-label"><p>Add Server</p></div>
                </ul>
                
            </div>
        )
    }
}

export default ServerIndex;