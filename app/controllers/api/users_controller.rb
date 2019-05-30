class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render json: {}
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password)
    end

end