# == Schema Information
#
# Table name: bills
#
#  id           :bigint           not null, primary key
#  biller_id    :integer          not null
#  category     :string           not null
#  description  :string           not null
#  total_amount :decimal(10, 2)   default(0.0), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Bill < ApplicationRecord

    belongs_to :biller,
        primary_key: :id,
        foreign_key: :biller_id,
        class_name: 'User'

    has_many :comments,
        primary_key: :id,
        foreign_key: :bill_id,
        class_name: 'Comment',
        dependent: :destroy

    has_many :payments,
        primary_key: :id,
        foreign_key: :bill_id,
        class_name: 'Payment',
        dependent: :destroy

end
