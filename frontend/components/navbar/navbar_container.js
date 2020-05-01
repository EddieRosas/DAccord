import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';


import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
