class ChangeAdjustmentReasonInProduct < ActiveRecord::Migration
  def change
    change_column :products, :adjustment_reason, :integer
  end
end
