# coding: utf-8
class WxUser < ActiveRecord::Base
  acts_as_follower

  enum_attr :subscribe, :in => [
    ['unsubscribe', 0, '未关注'],
    ['subscribed',  1, '已关注']
  ]

  acts_as_enum :sex, :in => [
    ['secret', 0, '未知'],
    ['male', 1, '男'],
    ['female', 2, '女'],
  ]

  validates :openid, presence: true
  has_many :survey_results
  has_many :feedbacks
end
