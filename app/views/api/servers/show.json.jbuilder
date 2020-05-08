json.server do
  json.extract! @server, :id, :name, :owner_id, :user_ids, :channel_ids
  if @server.image.attached?
    json.imageUrl url_for(@server.image)
  end
end

json.channels do
    @server.channels.each do 
        json.extract! channel, :id, :name, :server_id
    end 
end 

