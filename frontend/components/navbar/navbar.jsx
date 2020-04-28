import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : <p>No current user</p>  

    return (
        <header className="nav-bar">
            <h1 className="logo">D'ACCOHHH</h1>
            <div>
                {display}
            </div>
        </header>
    );
};