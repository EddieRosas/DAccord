import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUsers = (serverId) => dispatch => (
    APIUtil.fetchUsers(serverId).then(
        (users) => dispatch(receiveUsers(users))
    )
);