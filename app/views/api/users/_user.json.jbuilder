json.extract! user, :id, :username
if user.image.attached?
    json.imageUrl url_for(user.image)
end