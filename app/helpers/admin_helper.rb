module AdminHelper
  def no_records_tag(colspan, text = '没有数据')
    raw %(<td colspan="#{colspan}" class="text-center text-success">#{text}</td>)
  end

  def show_introduce_class(current_show_introduce)
    # current_show_introduce = current_show_introduce.to_i
    #  if current_user.show_introduce >= current_show_introduce
    #  	'miss_finish'
    #  elsif current_user.show_introduce == current_show_introduce - 1
    #  	'miss_active'
    #  else
    #  	''
    #  end
  end

  def find_admin_activities
    activities = []
    current_account.region_users.each do |r|
      r.region.promotion_groups.each do |e|
        e.city_users.each do |p|
          p.topic_activities.end.each do |d|
            activities.push(d)
          end
        end
      end
    end
    activities
  end
end