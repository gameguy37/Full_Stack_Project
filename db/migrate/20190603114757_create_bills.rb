class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.integer :biller_id, null: false
      t.string :category, null: false
      t.string :description, null: false
      t.decimal :total_amount, precision: 10, scale: 2, null: false, default: 0.00
      t.timestamps
    end
    add_index :bills, :biller_id
  end
end
