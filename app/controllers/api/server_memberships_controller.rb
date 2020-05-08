class Api::ServerMembershipsController < ApplicationController 

    def create
        @server_membership = ServerMembership.new

        server = Server.find_by(name: params[:name])
        @server_membership.server_id = server.id if server
        @server_membership.user_id = current_user.id

        if @server_membership.save
            @current_user_id = @server_membership.user_id
            @server = Server.find(@server_membership.server_id)
            
            render 'api/servers/show'
        else
            render json: ["Can't find that server, Sorry."], status: 404
        end

    end

    def leave
        @server_membership = ServerMembership.where(user_id: params[:user_id], server_id: params[:server_id]).first

            if @server_membership.destroy
                render json: @server_membership.server_id
            else
                render json: @server_membership.errors.full_messages, status: 404
            end

    end

    private

    def server_membership_params
        params.require(:server_membership).permit(:user_id, :server_id)
    end

end
