class InitAuction < ActiveRecord::Migration
  def change
  	create_table :auctions, comment: "拍品表" do |t|
  	  t.integer   :wx_user_id,                  comment: "所属用户"
  	  t.integer   :product_category_id,      		comment: "品目id"
  	  t.integer   :brand_id,						        comment: "品牌id"
      t.string    :no,                          comment: "编号"
      t.string    :brand_name,                  comment: "品牌名称"
  	  t.string    :name,                     		comment: "名称"
  	  t.string    :model,							          comment: "型号"
  	  t.text      :description,              		comment: "描述"
  	  t.integer   :status,         default: 0, 	comment: "状态"
  	  t.integer   :auction_status, default: -2, comment: "竞拍状态"
      t.string    :mobile,                      comment: "手机号码"
      t.datetime  :start_at,                    comment: "开始时间"
      t.datetime  :end_at,                      comment: "结束时间"
  	  t.timestamps
  	end

    add_index "auctions", ["wx_user_id"], :name => "index_auctions_on_wx_user_id"

  	create_table  :auction_tags, comment: "拍品标签表" do |t|
  	  t.integer    :auction_id,             comment: "拍品id"
  	  t.integer    :tag_id,							    comment: "标签id"
  	  t.timestamps
  	end

  	create_table  :auction_records, comment: "拍卖记录"  do |t|
  	  t.integer    :shop_user_id, 						comment: "用户id"
  	  t.integer    :auction_id,              comment: "拍品id"
  	  t.decimal    :price, 							precision: 12, scale: 2, comment: "竞拍价格"
  	  t.integer    :status,         default: 1,     comment: "状态"
  	  t.timestamps
  	end

    add_index "auction_records", ["shop_user_id"], :name => "index_auction_records_on_shop_user_id"
    add_index "auction_records", ["auction_id"], :name => "index_auction_records_on_auction_id"

  	create_table  :product_pictures, comment: "商品图片表" do |t|
  	  t.integer    :pictureable_id
  	  t.string     :pictureable_type
  	  t.string     :pic_key
  	  t.timestamps
  	end

  end
end
