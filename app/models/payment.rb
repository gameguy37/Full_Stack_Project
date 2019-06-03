# == Schema Information
#
# Table name: payments
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  bill_id        :integer          not null
#  initial_amount :decimal(10, 2)   not null
#  paid_amount    :decimal(10, 2)   default(0.0), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Payment < ApplicationRecord

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'

    belongs_to :bill,
        primary_key: :id,
        foreign_key: :bill_id,
        class_name: 'Bill'

end
