json.set! message.id do
  json.id message.id
  json.author_id message.author_id
  json.channel_id message.channel_id
  json.body message.body
  json.created_at message.created_at
end

