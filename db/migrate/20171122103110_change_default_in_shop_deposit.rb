class ChangeDefaultInShopDeposit < ActiveRecord::Migration
  def change
    change_column_default :shop_deposit_logs, :amount, nil
  end
end
