json.messages do 
    @messages.each do |message|
        json.set! message.id do
            json.id  message.id
            json.body  message.body
            json.author_id  message.author_id
            json.channel_id message.channel_id
            json.created_at  message.created_at
        end
    end
end