class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:email], params[:password])
        if @user
            login(@user)
            render :show
        else
            render json: ["Whoops! We couldn't find an account for that email address and password. Maybe you need to sign up?"], status: 422
        end
    end

    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: {}, status: 404
        end
    end

end