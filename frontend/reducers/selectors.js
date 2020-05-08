export const selectMembersByServer = (state, serverId) => {
    debugger
    if (serverId === "@me") return [];
    if (!serverId) return [];
    if (!state.entities.servers[serverId]) return [];
    return state.entities.servers[serverId].user_ids.map(id => state.entities.users[id])
}

export const serverChannelsSelector = (state, serverId) => {
    const { entities: { channels: allChannels } } = state;

    return Object.values(allChannels).filter(channel => (
        channel.serverId === Number(serverId)
    ));
};