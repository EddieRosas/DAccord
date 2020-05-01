json.extract! server, :id, :name, :owner_id

if server.image.attached?
    json.imageUrl url_for(server.image)
end