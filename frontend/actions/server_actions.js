import * as ServerApiUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const DELETE_SERVER = "DELETE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";

export const receiveServers = servers => {
    return({
        type: RECEIVE_SERVERS,
        servers
    })
}

export const receiveServer = server => ({
    type: RECEIVE_SERVER,
    server
});

export const deleteServer = serverId => ({
    type: DELETE_SERVER,
    serverId
});

export const receiveErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
});

// Thunk

export const fetchServers = () => dispatch => {
    return(
        ServerApiUtil.fetchServers()
            .then(
                servers => dispatch(receiveServers(servers)),
                errors => dispatch(receiveErrors(errors))
            )
    )
};

export const fetchServer = serverId => dispatch => (
    ServerApiUtil.fetchServer(serverId)
        .then(
            server => dispatch(receiveServers(server)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const createServer = server => dispatch => (
    ServerApiUtil.createServer(server)
        .then(
            server => dispatch(receiveServers(server)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const destroyServer = serverId => dispatch => (
    ServerApiUtil.deleteServer(serverId)
        .then(
            () => dispatch(deleteServer()),
            errors => dispatch(receiveErrors(errors))
        )
);

export const joinServer = serverId => dispatch => (
    ServerApiUtil.joinServer(serverId)
        .then(
            server => dispatch(receiveServer(server)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const leaveServer = serverId => dispatch => (
    ServerApiUtil.leaveServer(userId, serverId)
        .then(
            () => dispatch(deleteServer()),
            errors => dispatch(receiveErrors(errors))
        )
);
