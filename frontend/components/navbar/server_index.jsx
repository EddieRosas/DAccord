import React from 'react';
import { Link } from 'react-router-dom'

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchServers();
    }

    render () {
        console.log("serverindexprops", this.props)
        return (
            <div className="server-list">
                <ul>
                    <li className="server-list-item">
                        <Link to="channels/@me"> 
                            @me link 
                        </Link>
                    </li>
                    <div className="seperator"></div>
                    {this.props.servers.map(server => (
                        // <Link to={`channels/${server.id}`}>{server.name}</Link>
                        <li>
                            <p>{server.name}</p>
                            <img src={server.imageUrl} alt="" />
        {/* json.imageUrl url_for(server.image) */}

                        </li>
                    ))} 
                    <li>
                        Modal button for creating/joining servers
                    </li>
                </ul>
            </div>
        )
    }
}

export default ServerIndex;