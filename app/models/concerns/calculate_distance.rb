module CalculateDistance
  extend ActiveSupport::Concern
  EARTH_RADIUS = 6378137.0 #地球半径
  PI = Math::PI

  def topic_real_address(topic_address)
    [topic_address.province.try(:name), topic_address.city.try(:name), topic_address.district.try(:name), topic_address.address].compact.join
  end
  #
  # def get_shop_branch_location(address)
  #   params = {address: address, output: 'json', ak: '9c72e3ee80443243eb9d61bebeed1735'}
  #   result = RestClient.get('http://api.map.baidu.com/geocoder/v2/', params: params)
  #   data = JSON(result)
  #   data['result']['location']
  # rescue
  #   {}
  # end
  #
  # def self.get_rad(d)
  #   return d.to_f*PI/180.0
  # end
  #
  # def get_great_circle_distance(lat1, lng1, lat2, lng2)
  #   lat1, lng1, lat2, lng2 = [lat1, lng1, lat2, lng2].map(&:to_f)
  #   radLat1 = CalculateDistance.get_rad(lat1)
  #   radLat2 = CalculateDistance.get_rad(lat2)
  #   a = radLat1 - radLat2
  #   b = CalculateDistance.get_rad(lng1) - CalculateDistance.get_rad(lng2)
  #   s = 2*Math.asin(Math.sqrt(Math.sin(a/2)**2 + Math.cos(radLat1)*Math.cos(radLat2)*Math.sin(b/2)**2))
  #   s = s*EARTH_RADIUS
  #   return (s/1000).round(2)
  # end
  #
  # def calculate_distance(shop_address, user_address)
  #   shop_detail_address = real_address(shop_address)
  #   shop_result = get_shop_branch_location(shop_detail_address)
  #   puts shop_result
  #   lat1 = shop_result['lat']
  #   lng1 = shop_result['lng']
  #   user_result = get_shop_branch_location(user_address)
  #   lat2 = user_result['lat']
  #   lng2 = user_result['lng']
  #   distance = get_great_circle_distance(lat1, lng1, lat2, lng2)
  #   distance
  # end


  def location_address_info(address)
    params = {address: address, output: 'json', ak: 'dAYeNt1licEwUDKoyeNBskBQjHRKDDmb'}
    result = RestClient.get('http://api.map.baidu.com/geocoder/v2/', params: params)
    data = JSON(result)
    data['result']['location']
  rescue
    {}
  end

  def get_rad(d)
    return d.to_f*PI/180.0
  end

  def circle_distance(lat1, lng1, lat2, lng2)
    lat1, lng1, lat2, lng2 = [lat1, lng1, lat2, lng2].map(&:to_f)
    radLat1 = get_rad(lat1)
    radLat2 = get_rad(lat2)
    a = radLat1 - radLat2
    b = get_rad(lng1) - get_rad(lng2)
    s = 2*Math.asin(Math.sqrt(Math.sin(a/2)**2 + Math.cos(radLat1)*Math.cos(radLat2)*Math.sin(b/2)**2))
    s = s*EARTH_RADIUS
    return (s/1000).round(2)
  end

  # def self.calculate_distance(former_address, latter_address)
  #   shop_detail_address = real_address(former_address)
  #   shop_result = location_address_info(shop_detail_address)
  #   puts shop_result
  #   lat1 = shop_result['lat']
  #   lng1 = shop_result['lng']
  #   user_result = location_address_info(latter_address)
  #   lat2 = user_result['lat']
  #   lng2 = user_result['lng']
  #   distance = get_great_circle_distance(lat1, lng1, lat2, lng2)
  #   distance
  # end

  def direct_calculate_distance(wx_user_lat, wx_user_lng, topic_address)
    #former_result = location_address_info(former_address)
    lat1 = wx_user_lat
    lng1 = wx_user_lng
    #latter_result = location_address_info(topic_address)
    # lat2 = latter_result['lat']
    # lng2 = latter_result['lng']
    lat2 = topic_address.try(:location_x)
    lng2 = topic_address.try(:location_y)
    distance = circle_distance(lat1, lng1, lat2, lng2)
    distance
  end
end