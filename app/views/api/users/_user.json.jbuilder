json.extract! user, :id, :name, :email
json.acceptedFriendIds user.friendships.where(accepted:true).pluck(:friend_id)
json.pendingFriendIds user.friendships.where(accepted:false).pluck(:friend_id)

