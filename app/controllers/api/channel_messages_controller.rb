class Api::ChannelMessagesController < ApplicationController
    def index
        @messages = Channel.find_by(id: params[:channel_id]).messages
        render :index
    end

    def create
        @message = ChannelMessage.new(message_params)
        @message.author_id = current_user.id
        @message.channel_id = params[:channel_id]

        unless @message.save
            render json: @message.errors.full_messages, status: 422
        else
            broadcast('createMessage', @message)
            render :create, status: 200
        end

    end

    def destroy

    end 

    private
    
    def message_params 
        params.require(:message).permit(:body)
    end

end