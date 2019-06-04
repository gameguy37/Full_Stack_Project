json.extract! bill, :id, :biller_id, :category, :description, :total_amount
# json.acceptedFriendIds user.friendships.where(accepted:true).pluck(:friend_id)
# json.pendingFriendIds user.friendships.where(accepted:false).pluck(:friend_id)
json.payments bill.payments.pluck(:id)