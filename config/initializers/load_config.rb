# 常用变量声明
if Rails.env.production?
  MOBILE_SUB_DOMAIN = 'wx.o2o.masterkong'
else
  MOBILE_SUB_DOMAIN = Settings.mhostname.sub(/\.[com|cn].?/, '').split('.')[0..-2].join('.')
end

EXPORTING_COUNT = 500

# kefu
KEFU_URL = Rails.env.production? ? "http://kf.biaotutech.com" : "http://kefu.biaotutech.com"

if File.exists?("#{Rails.root}/config/payment_config.yml")
  PAYMENT_CONFIG = HashWithIndifferentAccess.new(YAML.load_file("#{Rails.root}/config/payment_config.yml")[Rails.env] || {})
end

# Model connection config
ActsAsTaggableOn::Tag.establish_connection(ActiveRecord::Base.configurations["user_identity"])
ActsAsTaggableOn::Tagging.establish_connection(ActiveRecord::Base.configurations["user_identity"])
