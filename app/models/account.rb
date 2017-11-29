class Account < ActiveRecord::Base
  has_secure_password

  store :metadata, accessors: [:auth_mobile]

  attr_accessor :current_password

  validates :nickname, presence: true, uniqueness: { case_sensitive: false }, length: { within: 2..20, too_short: '太短了，最少3位', too_long: "太长了，最多20位" }
  validates :password, presence: { message: '不能为空', on: :create }, length: { within: 6..20, too_short: '太短了，最少6位', too_long: "太长了，最多20位" }, allow_blank: true


  #after_create :init_data

  def self.current
    Thread.current[:account]
  end

  def self.current=(account)
    Thread.current[:account] = account
  end

  def self.authenticated(nickname, password)
    where("lower(nickname) LIKE ?", nickname.to_s.downcase).first.try(:authenticate, password)
  end


end
