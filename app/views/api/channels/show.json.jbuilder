json.channel do
  json.extract! @channel, :id, :name, :server_id
  json.messages @channel.messages
end
