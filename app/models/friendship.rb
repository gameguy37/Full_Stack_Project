# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  accepted   :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'

    belongs_to :friend,
        primary_key: :id,
        foreign_key: :friend_id,
        class_name: 'User'

end
