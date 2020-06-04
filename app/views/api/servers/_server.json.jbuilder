json.set! server.id do
  json.id server.id
  json.name server.name
  json.ownerId server.owner_id
  if server.image.attached?
    json.imageUrl url_for(server.image)
  end
  json.channel_ids server.channel_ids
end