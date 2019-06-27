class Api::FriendshipsController < ApplicationController

    def create
        @reciprocal_friendship = Friendship.find_by(user_id: params[:id], friend_id: current_user.id)
        
        if @reciprocal_friendship
            @reciprocal_friendship.accepted = true
            @friendship = current_user.friendships.create(friend_id: params[:id], accepted: true)
        else
            @friendship = current_user.friendships.create(friend_id: params[:id])
        end

        if @friendship.save
            render :show
        else
            render json: ["Unable to establish friendship"], status: 422
        end
    end

    def destroy
        @friendship = current_user.friendships.find_by(friend_id: params[:id])
        @friendship.destroy
        render :show
    end

end