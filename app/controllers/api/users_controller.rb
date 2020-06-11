class Api::UsersController < ApplicationController

    def index
        @users = Server.find_by(id: params[:id]).users

        render :index
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

   def update
    unless current_user.id == params[:id].to_i
      flash.now[:errors] = ['You do not have permissions to edit this user.']
    else
      @user = current_user
      @user.image.purge
      unless @user.update(edit_params)
        flash.now[:errors] = @user.errors.full_messages
      else
        render :update, status: 200
      end
    end
  end

    private

    def user_params 
        params.require(:user).permit(:email, :username, :password)
    end

    def edit_params
    user_params = params.require(:user).permit(:image)
    end
        
end
