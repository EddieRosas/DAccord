json.entities do
  json.servers do
    @servers.each do |server|
      json.partial! 'server', server: server
    end
  end

  json.users do
    @users.each do |user|
      json.partial! '/api/users/user', user: user
    end
  end

  json.channels do
    @channels.each do |channel|
      json.partial! 'api/channels/channel', channel: channel
    end
  end

  json.messages do
    @messages.each do |message|
      json.partial! 'api/channel_messages/channel_message', message: message
    end
  end
end