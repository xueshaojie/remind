class InitAuction < ActiveRecord::Migration
  def change
  	create_table :auction_products, comment: "拍品表" do |t|
  	  t.integer   :user_id,                  		comment: "所属用户"
  	  t.integer   :product_category_id,      		comment: "品目id"
  	  t.integer   :brand_id,						comment: "品牌id"
  	  t.string    :name,                     		comment: "名称"
  	  t.string    :model,							comment: "型号"
  	  t.text      :description,              		comment: "描述"
  	  t.integer   :status,            default: 0, 	comment: "状态"
  	  t.integer   :auction_status,    default: -2,  comment: "竞拍状态"
  	  t.timestamps
  	end

  	create_table :auction_users, comment: "拍卖人资料"  do |t|
  	  t.integer   :user_id,                  		comment: "所属用户"
  	  t.integer   :auction_product_id,      		comment: "品目id"
  	  t.string    :name, 							comment: "拍卖人姓名"
  	  t.string    :mobile,							comment: "手机号"
  	  t.timestamps
  	end

  	create_table  :auction_product_tag_maps, comment: "拍品标签表" do |t|
  	  t.integer    :auction_product_id,             comment: "拍品id"
  	  t.integer    :tag_id,							comment: "标签id"
  	  t.datetime   :created_at, 	 null: false
  	end

  	create_table  :auction_records, comment: "拍卖记录"  do |t|
  	  t.integer    :user_id, 						comment: "用户id"
  	  t.integer    :auction_product_id,             comment: "拍品id"
  	  t.decimal    :price, 							precision: 12, scale: 2, comment: "竞拍价格"
  	  t.integer    :status,         default: 1,     comment: "状态"
  	  t.datetime   :created_at,     null: false      
  	end

  	create_table  :product_pictures, comment: "商品图片表" do |t|
  	  t.integer    :pictureable_id
  	  t.string     :pictureable_type
  	  t.string     :pic_key
  	  t.timestamps
  	end

  end
end
