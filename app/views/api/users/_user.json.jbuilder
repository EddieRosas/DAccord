json.set! user.id do
  json.id user.id
  json.username user.username
  if user.image.attached?
    json.imageUrl url_for(user.image)
  end
end