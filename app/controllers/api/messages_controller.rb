class Api::MessagesController < ApplicationController
    # def index
    #     @messages = Channel.find_by(id: params[:id]).messages
    #     render :index
    # end

    # def create
    #     @message = Message.new(message_params)
    #     @message.author_id = current_user.id

    # if @channel.save
    #     ActionCable.server.broadcast 'server_channel'
    #     head :ok
    # else
    #     render json: @message.errors.full_messages, status: 422
    # end

    # end

    # def destroy

    # end 

    # private
    
    # def message_params 
    #     params.require(:message).permit(:body)
    # end
end