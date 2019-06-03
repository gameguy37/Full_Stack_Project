class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.integer :user_id, null: false
      t.integer :bill_id, null: false
      t.decimal :initial_amount, null: false, precision: 10, scale: 2
      t.decimal :paid_amount, null: false, default: 0.00, precision: 10, scale: 2
      t.timestamps
    end
    add_index :payments, :user_id
    add_index :payments, :bill_id
  end
end
