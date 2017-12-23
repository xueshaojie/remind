# coding: utf-8
class WxUser < ActiveRecord::Base
  validates :openid, presence: true
  has_many :notices 
end
