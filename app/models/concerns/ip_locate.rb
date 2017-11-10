module IpLocate extend ActiveSupport::Concern

  def locate_address(ip)
    #params = {ak: 'dAYeNt1licEwUDKoyeNBskBQjHRKDDmb',ip: ip, coor: 'bd09ll'}
    result = RestClient.get("http://api.map.baidu.com/location/ip?ak=dAYeNt1licEwUDKoyeNBskBQjHRKDDmb&coor=bd09ll&ip=#{ip}")
    data = JSON(result)
    data['content']['point']
  rescue
    {}
  end


end