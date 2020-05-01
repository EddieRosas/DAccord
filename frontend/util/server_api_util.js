export const fetchServers = () => {
    return(
        $.ajax({
            method: 'GET',
            url: '/api/servers'
        })
    )
}

export const fetchServer = serverId => (
    $.ajax({
        method: 'GET',
        url: `/api/servers/${serverId}`,
    })
)

export const createServer = server => (
    $.ajax({
        method: 'POST',
        url: '/api/servers',
        data: { server }
    })
)

export const deleteServer = serverId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/servers/${serverId}`,
    })
)

export const joinServer = serverId => (
    $.ajax({
        method: 'POST',
        url: `/api/server_memberships`,
        data: { serverId }
    })
)

export const leaveServer = (userId, serverId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/server_memberships`,
        data: { user_id: userId, server_id: serverId}
    })
)