class ServerChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "channel_messages_#{params["channelId"]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
