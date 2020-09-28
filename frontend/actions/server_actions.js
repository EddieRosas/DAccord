import * as ServerApiUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const DELETE_SERVER = "DELETE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const RECEIVE_DATA = "RECEIVE_DATA"

export const receiveServers = servers => {
    return({
        type: RECEIVE_SERVERS,
        servers
    })
}

export const receiveData = payload => {
    return({
        type: RECEIVE_DATA,
        payload
    })
}

export const receiveServer = payload => {
    return({
        type: RECEIVE_SERVER,
        payload
    }
    )
};

export const deleteServer = serverId => {
    
    return(
    {
    type: DELETE_SERVER,
    serverId
})};

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

export const fetchData = () => dispatch => {
    return(
        ServerApiUtil.fetchData()
            .then(
                payload => dispatch(receiveData(payload.entities)),
                errors => dispatch(receiveErrors(errors))
            )
    )
};

export const fetchServer = serverId => dispatch => (
    ServerApiUtil.fetchServer(serverId)
        .then(
            payload => dispatch(receiveServer(payload)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const createServer = server => dispatch => (
    ServerApiUtil.createServer(server)
        .then(
            server => dispatch(receiveServer(server)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const destroyServer = serverId => dispatch => (
    ServerApiUtil.deleteServer(serverId)
        .then(
            (serverId) => dispatch(deleteServer(serverId)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const joinServer = (userId, serverId) => dispatch => (
    ServerApiUtil.joinServer(userId, serverId)
        .then(
            server => dispatch(receiveServer(server)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const leaveServer = (serverId, userId) => dispatch => (
    ServerApiUtil.leaveServer(serverId, userId)
        .then(
            (serverId) => dispatch(deleteServer(serverId)),
            errors => dispatch(receiveErrors(errors))
        )
);
