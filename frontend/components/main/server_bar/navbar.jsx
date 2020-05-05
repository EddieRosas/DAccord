import React from 'react';
import ServerIndex from './server_index';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : <p>No current user</p>  

    return (
        <div>
            <ServerIndex />
            <footer className="current-user-display">
                <div>
                    {display}
                </div>
            </footer>
        </div>
    );
};