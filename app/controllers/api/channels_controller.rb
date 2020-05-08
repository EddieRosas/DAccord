class Api::ChannelsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @channels = Server.find_by(id: params[:id]).channels
    
    render :index
  end 

  def show
    @channel = Channel.find_by(id: params[:id])

    render :show
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
    
  end

  def update
    @channel = current_user.owned_servers.find(params[:channel][:server_id]).channels.find(params[:id])

    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = current_user.owned_servers.find(params[:channel][:serverId]).channels.find(params[:channel][:channelId])

    if @channel
      @channel.destroy

      render :show
    else
      render json: ["Couldn't find that channel"], status: 404
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end
  
end