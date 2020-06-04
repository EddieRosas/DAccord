import React from 'react';
import { Link } from 'react-router-dom'

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)

        this.handleAddOrJoinClick = this.handleAddOrJoinClick.bind(this);
    }
    

    handleAddOrJoinClick(e) {
        e.preventDefault();
        this.props.openModal();
    }

    render () {
        function nameAbrv(server) {
            let newName = "";
            if (server.name !== undefined) {
                let words = server.name.split(" ")
                words.forEach((word) => {
                    newName += word[0];
                })
            }
            return newName;
        }

        return (    
            <div className="server-list" >
                <div className="server-button at-me">
                    <Link to="/channels/@me">
                        <img src={window.atMe} alt="@me-link-icon"/>
                    </Link>
                    <div className="server-button-label">Home</div>
                </div>
                <div className="separator"></div>
                <ul>
                    {this.props.servers.map(server => (
                        <li key={server.id}>
                            { server.imageUrl
                                ? 
                                <div className="server-button">
                                    <Link to={`/channels/${server.id}/${server.channel_ids[0]}`}>
                                        <img className="server-button-img" src={server.imageUrl}></img>
                                        <div className="server-button-label">{server.name}</div>
                                    </Link>
                                </div>
                                :
                                <div className="server-button">
                                    <Link to={`/channels/${server.id}/${server.channel_ids[0]}`}>
                                        <p className="server-button text" spellCheck="false">{nameAbrv(server)}</p>
                                        <div className="server-button-label" spellCheck="false">{server.name}</div>
                                    </Link>
                                </div>

                            }
                        </li>
                    ))} 
                    <div className="server-button add-or-join-server" >
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
                        <div className="server-button-label">Add Server</div>
                    </div>
                </ul>
                
            </div>
        )
    }
}

export default ServerIndex;