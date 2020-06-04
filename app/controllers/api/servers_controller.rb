class Api::ServersController < ApplicationController 
    def index 
        @servers = current_user.servers.includes(:users, :channels)
        @users = Array.new
        @channels = Array.new
        @messages = Array.new
        @servers.each do |server|
            @users += server.users
            @channels += server.channels
        end
        @channels.each do |channel|
            @messages += channel.messages
        end
        @users = @users.uniq
        @users.push current_user if @users.empty?
        render :index, status: 200
    end

    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id

        if @server.save
            ServerMembership.create(user_id: @server.owner_id, server_id: @server.id)
            Channel.create(name: "general", server_id: @server.id)
            @channels = @server.channels
            
            render :show
        else
            render json: @servers.errors.full_messages, status: 422
        end

    end

    def show
        @server = Server.find_by(id: params[:id])

        render :show
    end

    def destroy
        @server = Server.find_by(id: params[:id])

        if @server.owner.id == current_user.id
            if @server.destroy
                render json: @server.id
            else
                render json: @server.errors.full_messages, status: 422
            end
        else
            render json: ["Unauthorized Action: Only Server Owner can delete the server!"], status: 422
        end
    end

    private

    def server_params
        params.require(:server).permit(:name, :image)
    end
end
