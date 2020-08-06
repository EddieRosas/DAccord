class ServerChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
  
    stream_for "channel-#{params["channelId"]}:messages"
  end

  def speak(data) 
    message = ChannelMessage.create(
      body: data['body'], 
      author_id: data['authorId'], 
      channel_id: data['channelId']
    )

    socket = { message: 
      {
        id: message.id, 
        body: message.body, 
        author_id: message.author_id, 
        channel_id: message.channel_id, 
        created_at: message.created_at
      }
    }
    
    ServerChannel.broadcast_to("channel-#{data["channelId"]}:messages", socket )
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
