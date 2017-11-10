require 'faraday'
# UserIdentityClient.new(client_id, client_secret).auth_organization_user('x', 'y').update_wx_user_info('xxxxx', nickname: 'test')
# UserIdentityClient.new(client_id, client_secret).auth_organization_customer('wx_user_open_id', 'mp_user_open_id', 'org_uid').create_customer_reward(uid: 'xxxx', title: 'xxx', url: 'xxx', state: 'xxx')
# UserIdentityClient.new(client_id, client_secret).auth_organization_customer('wx_user_open_id', 'mp_user_open_id', 'org_uid').update_customer_reward('xxxx', title: 'yyy', url: 'yyy', state: 'yyy')
class UserIdentityClient
  attr_reader :client_id, :client_secret

  def initialize(client_id, client_secret)
    @client_id, @client_secret = client_id, client_secret
  end

  def auth_organization_user(encrypted_uid, organization_uid)
    @auth = JSON.load(Faraday.post("http://user.o2o.masterkong.com.cn/authorizations/organization_user", {authorization: {encrypted_uid: encrypted_uid, organization_uid: organization_uid}}, {Authorization: "ClientPlainToken #{client_token}"}).body) rescue {}
    return self
  end

  def auth_organization_customer(wx_user_open_id, mp_user_open_id, organization_uid)
    @auth = JSON.load(Faraday.post("http://user.o2o.masterkong.com.cn/authorizations/organization_customer", {authorization: {wx_user_open_id: wx_user_open_id, mp_user_open_id: mp_user_open_id, organization_uid: organization_uid}}, {Authorization: "ClientPlainToken #{client_token}"}).body) rescue {}
    return self
  end

  def update_wx_user_info(open_id, params={})
    resp = Faraday.put "http://user.o2o.masterkong.com.cn/wx_user_info?wx_user_open_id=#{open_id}", {wx_user_info: params.slice(:nickname, :headimgurl, :sex, :province, :city, :subscribed_at)}, {Authorization: "PlainAuthToken #{@auth['token']}"}
    JSON.load(resp.body)
  end

  def create_customer_reward(params={})
    resp = Faraday.post "http://user.o2o.masterkong.com.cn/rewards", {reward: params.slice(:uid, :title, :url, :state)}, {Authorization: "PlainAuthToken #{@auth['token']}"}
    JSON.load(resp.body)
  end

  def update_customer_reward(uid, params={})
    resp = Faraday.patch "http://user.o2o.masterkong.com.cn/rewards/0?uid=#{uid}", {reward: params.slice(:title, :url, :state)}, {Authorization: "PlainAuthToken #{@auth['token']}"}
    JSON.load(resp.body)
  end
  
  private
    def client_token
      return @client_token if @client_token.present?
      nonce = SecureRandom.hex
      sign = Digest::MD5.hexdigest("#{{client_id: client_id, nonce: nonce}.to_query}&client_secret=#{client_secret}")
      @client_token = JSON.load(Faraday.post("http://user.o2o.masterkong.com.cn/credentials", {credential: {client_id: client_id, nonce: nonce, sign: sign}}).body)['token']
    end
end