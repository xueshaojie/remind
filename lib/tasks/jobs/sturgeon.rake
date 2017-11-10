namespace :job do

  desc 'run all tasks ...'
  task all: [
    :genrate_tasks
    # :update_task_status
  ]

  desc "run day task"
  task :check_task_status => :environment do
    date = (ENV['date'].try(:to_date) rescue nil) || Date.today

    puts "start run day #{date} tasks"

    Task.where("status in (?) and task_end_at is not null and task_end_at < ?", [-2,0,1], date.yesterday.end_of_day).each do |task|
      task.update_attributes(status: -1)
    end
  end

  desc "run day task"
  task :update_task_status => :environment do
    date = (ENV['date'].try(:to_date) rescue nil) || Date.today

    puts "start run day #{date} tasks"

    TaskTemplate.where(task_type: 1).each do |t|
      Task.created.where("task_template_id = ? and time_info like ?", t.id, "#{date.to_s}%").each do |task|
        task.update_attributes(status: 0)
      end
    end

    TaskTemplate.where(task_type: 2).each do |t|
      tasks = t.tasks.where(time_info: "#{date.year}年#{date.month}月")
      next if tasks.pending.count > 0
      # next if tasks.in.count > 0
      next if tasks.finished.count > 0 && tasks.finished.last.current_times == t.task_times

      tasks.created.first.try(:pending!)
    end

    TaskTemplate.where(task_type: 3).each do |t|
      quarter = date.month < 4 ? 1 : (date.month < 7 ? 2 : (date.month < 10 ? 3 : 4))
      tasks = t.tasks.where(time_info: "#{date.year}年第#{quarter}季度")
      next if tasks.pending.count > 0
      # next if tasks.in.count > 0
      next if tasks.finished.count > 0 && tasks.finished.last.current_times == t.task_times

      tasks.created.first.try(:pending!)
    end

    TaskTemplate.where(task_type: 4).each do |t|
      tasks = t.tasks.where(time_info: "#{date.year}#{date.month < 7 ? '上' : '下'}半年")
      next if tasks.pending.count > 0
      # next if tasks.in.count > 0
      next if tasks.finished.count > 0 && tasks.finished.last.current_times == t.task_times

      tasks.created.first.try(:pending!)
    end

    TaskTemplate.where(task_type: 5).each do |t|
      tasks = t.tasks.where(time_info: "#{date.year}年")
      next if tasks.pending.count > 0
      # next if tasks.in.count > 0
      next if tasks.finished.count > 0 && tasks.finished.last.current_times == t.task_times

      tasks.created.first.try(:pending!)
    end
  end

  desc "genrate tasks"
  task :genrate_tasks => :environment do
    now = Time.now
    date = (ENV['date'].try(:to_date) rescue nil) || Date.today
    # month = (ENV['month'] || date.next_month.month).to_i
    month = (ENV['month'] || date.month).to_i

    puts "start run day #{date} tasks"

    TaskTemplate.on.order(:prev_task_template_id).each do |t|
      if t.task_type1?
        if t.day_type1?
          t.week_items.to_s.split(',').each do |day|
            # current_date = (date.next_week+(day.to_i-1).days).to_date
            current_date = (date.beginning_of_week+(day.to_i-1).days).to_date

            next if now.to_date > current_date

            task = Task.not_deleted.where(task_template_id: t.id, time_info: "#{current_date}").first_or_create(
              task_type: t.task_type,
              task_start_at: "#{current_date.to_s} 00:00:00",
              task_end_at: "#{current_date.to_s} 23:59:59",
              task_times: t.task_times,
              current_times: 1,
              name: t.name,
              task_category_id: t.task_category_id,
              task_level_id: t.task_level_id,
              department_id: t.department_id,
              prev_task_id: Task.not_deleted.where(task_template_id: t.prev_task_template_id, time_info: "#{current_date}").last.try(:id).to_i,
              prev_interval: t.prev_interval,
              is_force_order: t.is_force_order,
              status: 0
            )

            t.task_template_items.normal.each do |item|
              TaskItem.where(department_id: t.department_id, task_id: task.id, name: item.name, position: item.position, description: item.description).first_or_create
            end
          end
        else
          t.week_items.to_s.split(',').each do |day|
            # current_date = (date.next_week+(day.to_i-1).days).to_date
            current_date = (date.beginning_of_week+(day.to_i-1).days).to_date

            next if now.to_date > current_date

            hours = t.hour_items.to_s.split(',')

            hours.each_with_index do |hour, index|
              next if current_date == now.to_date && now.hour > hour.to_i

              end_at = "#{current_date.to_s} #{index == hours.count - 1 ? "23" : hours[index+1].to_i - 1}:59:59"
              task = Task.not_deleted.where(task_template_id: t.id, time_info: "#{current_date} #{hour}点").first_or_create(
                task_type: t.task_type,
                task_start_at: "#{current_date.to_s} #{hour}:00:00",
                task_end_at: end_at,
                task_times: t.task_times,
                current_times: index.next,
                name: t.name,
                task_category_id: t.task_category_id,
                task_level_id: t.task_level_id,
                department_id: t.department_id,
                prev_task_id: Task.not_deleted.where(task_template_id: t.prev_task_template_id).where("task_end_at <= ?", Time.parse(end_at)).last.try(:id).to_i,
                prev_interval: t.prev_interval,
                is_force_order: t.is_force_order,
                status: 0
              )

              t.task_template_items.normal.each do |item|
                TaskItem.where(department_id: t.department_id, task_id: task.id, name: item.name, position: item.position, description: item.description).first_or_create
              end
            end
          end
        end
      elsif t.task_type2?
        days = {
          1 => 31,
          2 => 28,
          3 => 31,
          4 => 30,
          5 => 31,
          6 => 30,
          7 => 31,
          8 => 31,
          9 => 30,
          10 => 31,
          11 => 30,
          12 => 31,
        }
        for i in 1..t.task_times
          task = Task.not_deleted.where(task_template_id: t.id, time_info: "#{date.year}年#{month}月", current_times: i).first_or_create(
            task_type: t.task_type,
            task_start_at: "#{date.year}-#{month}-01 00:00:00",
            task_end_at: "#{date.year}-#{month}-#{days[month]} 23:59:59",
            task_times: t.task_times,
            name: t.name,
            task_category_id: t.task_category_id,
            task_level_id: t.task_level_id,
            department_id: t.department_id,
            # user_id: t.user_id,
            prev_task_id: Task.not_deleted.where(task_template_id: t.prev_task_template_id).first.try(:id).to_i,
            prev_interval: t.prev_interval,
            is_force_order: t.is_force_order,
            status: 0
          )

          t.task_template_items.normal.each do |item|
            TaskItem.where(department_id: t.department_id, task_id: task.id, name: item.name, position: item.position, description: item.description).first_or_create
          end
        end
      elsif t.task_type3?
        # 生成今年4个季度的数据
        quarters = {
          1 => ['01-01', '03-31'],
          2 => ['04-01', '06-30'],
          3 => ['07-01', '09-30'],
          4 => ['10-01', '12-31'],
        }
        month_quarters = {
          1 => 1,
          2 => 1,
          3 => 1,
          4 => 2,
          5 => 2,
          6 => 2,
          7 => 3,
          8 => 3,
          9 => 3,
          10 => 4,
          11 => 4,
          12 => 4,
        }
        j = month_quarters[date.month]
        # for j in 1..4
          for i in 1..t.task_times
            task = Task.not_deleted.where(task_template_id: t.id, time_info: "#{date.year}年第#{j}季度", current_times: i).first_or_create(
              task_type: t.task_type,
              task_start_at: "#{date.year}-#{quarters[j].first} 00:00:00",
              task_end_at: "#{date.year}-#{quarters[j].last} 23:59:59",
              task_times: t.task_times,
              name: t.name,
              task_category_id: t.task_category_id,
              task_level_id: t.task_level_id,
              department_id: t.department_id,
              # user_id: t.user_id,
              prev_task_id: Task.not_deleted.where(task_template_id: t.prev_task_template_id).first.try(:id).to_i,
              prev_interval: t.prev_interval,
              is_force_order: t.is_force_order,
              status: 0
            )

            t.task_template_items.normal.each do |item|
              TaskItem.where(department_id: t.department_id, task_id: task.id, name: item.name, position: item.position, description: item.description).first_or_create
            end
          end
        # end
      elsif t.task_type4?
        half_years = {
          1 => ['01-01', '06-30'],
          2 => ['07-01', '12-31'],
        }
        j = date.month > 6 ? 2 : 1
        # for j in 1..2
          for i in 1..t.task_times
            task = Task.not_deleted.where(task_template_id: t.id, time_info: "#{date.year}#{j == 1 ? '上' : '下'}半年", current_times: i).first_or_create(
              task_type: t.task_type,
              task_start_at: "#{date.year}-#{half_years[j].first} 00:00:00",
              task_end_at: "#{date.year}-#{half_years[j].last} 23:59:59",
              task_times: t.task_times,
              name: t.name,
              task_category_id: t.task_category_id,
              task_level_id: t.task_level_id,
              department_id: t.department_id,
              # user_id: t.user_id,
              prev_task_id: Task.not_deleted.where(task_template_id: t.prev_task_template_id).first.try(:id).to_i,
              prev_interval: t.prev_interval,
              is_force_order: t.is_force_order,
              status: 0
            )

            t.task_template_items.each do |item|
              TaskItem.where(department_id: t.department_id, task_id: task.id, name: item.name, position: item.position, description: item.description).first_or_create
            end
          end
        # end
      elsif t.task_type5?
        for i in 1..t.task_times
          task = Task.not_deleted.where(task_template_id: t.id, time_info: "#{date.year}年", current_times: i).first_or_create(
            task_type: t.task_type,
            task_start_at: "#{date.year}-01-01 00:00:00",
            task_end_at: "#{date.year}-12-31 23:59:59",
            task_times: t.task_times,
            name: t.name,
            task_category_id: t.task_category_id,
            task_level_id: t.task_level_id,
            department_id: t.department_id,
            # user_id: t.user_id,
            prev_task_id: Task.not_deleted.where(task_template_id: t.prev_task_template_id).first.try(:id).to_i,
            prev_interval: t.prev_interval,
            is_force_order: t.is_force_order,
            status: 0
          )

          t.task_template_items.normal.each do |item|
            TaskItem.where(department_id: t.department_id, task_id: task.id, name: item.name, position: item.position, description: item.description).first_or_create
          end
        end
      end
    end
    puts "finished"
  end

end

