json.extract! bill, :id, :biller_id, :category, :description, :total_amount, :created_at, :updated_at
# json.acceptedFriendIds user.friendships.where(accepted:true).pluck(:friend_id)
# json.pendingFriendIds user.friendships.where(accepted:false).pluck(:friend_id)