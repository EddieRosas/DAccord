@channels.each do |channel|
    json.channel do
        json.extract! @channel, :id, :name, :server_id
    end
end
