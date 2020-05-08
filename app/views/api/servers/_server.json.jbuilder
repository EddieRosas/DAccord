json.extract! server, :id, :name, :owner_id, :user_ids, :channel_ids

if server.image.attached?
    json.imageUrl url_for(server.image)
end
