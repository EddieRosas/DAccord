json.server do
  json.id @server.id
  json.name @server.name
  json.ownerId @server.owner_id
  json.userIds @server.user_ids
  json.channelIds @server.channel_ids
  if @server.image.attached?
    json.imageUrl url_for(@server.image)
  end
end

json.channels do
    @server.channels.each do |channel|
        json.id channel.id
        json.name channel.name
        json.serverId channel.server_id
    end 
end

json.users do
  @server.users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username
        json.imageUrl url_for(user.image)
    end
  end
end


