# coding: utf-8
class WxUser < ActiveRecord::Base
  acts_as_enum :sex, :in => [
    ['secret', 0, '未知'],
    ['male', 1, '男'],
    ['female', 2, '女'],
  ]

  validates :openid, presence: true

  belongs_to :wx_mp_user

end
