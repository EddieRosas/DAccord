@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username
        json.imageUrl url_for(user.image)
    end
end
