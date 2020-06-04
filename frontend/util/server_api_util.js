export const fetchServers = () => {
    return(
        $.ajax({
            method: 'GET',
            url: '/api/servers'
        })
    )
}

export const fetchData = () => {
    return(
        $.ajax({
            method: 'GET',
            url: '/api/servers'
        })
    )
}

export const fetchServer = serverId => {
 
    return(
    $.ajax({
        method: 'GET',
        url: `/api/servers/${serverId} `,
    }))

}

export const createServer = formData => (
    $.ajax({
        method: 'POST',
        url: '/api/servers',
        data: formData,
        contentType: false,
        processData: false
    })
)

export const deleteServer = serverId => {
    return (
    $.ajax({
        method: 'DELETE',
        url: `/api/servers/${serverId}`,
    })
    )
}

export const joinServer = server_name => (
    $.ajax({
        method: 'POST',
        url: `/api/server_memberships`,
        data: { name: server_name }
    })
)


export const leaveServer = (userId, serverId) => {
    return(
    $.ajax({
        method: 'DELETE',
        url: `/api/server_memberships`,
        data: { user_id: userId, server_id: serverId}
    }))
}