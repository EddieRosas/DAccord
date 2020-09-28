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
        # For our purposes we can leave messages constantly persisting--
        # Would be useful to delete messages that are either very old in order
        # clear up some space in the DB or delete messages that
        # were sent by a user by mistake
    end 

    private
    
    def message_params 
        params.require(:message).permit(:body)
    end

end