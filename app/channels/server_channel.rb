class ServerChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "channel_messages_#{params["channelId"]}"
  end

  # def speak(data)
  #   message = ChannelMessage.create(body: data['message'], author_id: 1, channel_id: 1) # author_id: data['authorId'], channel_id: data['channelId'])
  #   socket = { message: message.body } # author: User.find_by(id: author_id)}
  #   ServerChannel.broadcast_to("server_#parmams", socket)
  # end

  # def speak(channel, message)
  #   ActionCable.server.broadcast("channel_messages_#{channel}", message)
  # end


  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
