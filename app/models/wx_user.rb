# coding: utf-8
class WxUser < ActiveRecord::Base
  acts_as_follower

  MATCH_TYPE_OPTIONS = [
    ['normal', 1, '正常模式'],
    ['postcard', 2, '打印模式'],
    ['share_photos', 3, '晒图模式'],
    ['greet', 4, '贺卡模式'],
    ['house_live_photos', 5, '实景拍摄模式'],
    ['wx_print', 6, '微信打印模式'],
    ['wifi', 7, 'wifi模式'],
    ['weixin_print', 8, '微信打印模式(不再使用)'],
    ['hanming_wifi', 9, '汉明wifi'],
    ['kefu', 10, '人工客服模式'],
    ['kefu_rate', 11, '人工客服评价模式'],
    ['wx_wall_mode', 12, '微信墙模式'],
    ['shake_mode', 13, '摇一摇模式']
  ]
  enum_attr :match_type, in: MATCH_TYPE_OPTIONS

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
  belongs_to :wx_mp_user
  has_many :auctions

end
