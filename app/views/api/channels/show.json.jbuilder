json.channel do
  json.extract! @channel, :id, :name
  json.serverId @channel.server_id
end
