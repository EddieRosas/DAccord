import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const EDIT_USER = "EDIT_USER"
// export const RECEIVE_USER = "RECEIVE_USER"

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

export const editUser = user => ({
    type: EDIT_USER,
    user
});

// export const receiveUser = user => ({
//     type: RECEIVE_USERS,
//     user
// })

export const fetchUsers = (serverId) => dispatch => (
    APIUtil.fetchUsers(serverId).then(
        (users) => dispatch(receiveUsers(users))
    )
);

export const updateUser = (user, id) => dispatch => (
    APIUtil.updateUser(user, id)
        .then(
            user => dispatch(editUser(user)))
);

// export const fetchUser = (serverId) =>