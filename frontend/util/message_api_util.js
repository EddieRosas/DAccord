export const getChannelMessages = (channelId) => {
    return(
        $.ajax({
            method: 'GET',
            url: `/api/channels/${channelId}/channel_messages`
        })
    )
}

export const createChannelMessage = (message, channelId) => {
    return(
        $.ajax({
            method: 'POST',
            url: `/api/channels/${channelId}/channel_messages`,
            data: message
        })
    )
}
