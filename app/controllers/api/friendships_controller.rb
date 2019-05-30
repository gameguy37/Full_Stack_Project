class Api::FriendshipsController < ApplicationController

    def create
        @friendship = current_user.friendships.create(friend_id: params[:friend_id])
        if @friendship.save
            # render :show
        else
            # render json: ["Unable to establish friendship"], status: 422
        end
    end

    def destroy
        @friendship = current_user.friendships.find(params[:id])
        @friendship.destroy
    end

end