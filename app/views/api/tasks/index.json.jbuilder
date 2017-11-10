json.taskList @tasks do |task|
  json.id task.id
  json.name task.name
  json.task_template_id task.task_template_id
  json.task_category_id task.task_category_id
  json.task_category_name task.task_category.try(:name).to_s
  json.task_level_id task.task_level_id
  json.department_id task.department_id
  json.user_id task.user_id || -1
  json.user_name task.user.try(:name).to_s
  json.prev_task_id task.prev_task_id
  json.prev_task_name task.prev_task.try(:name).to_s
  json.prev_interval task.prev_interval
  json.is_force_order task.is_force_order
  json.t_order task.position
  json.status task.status
  json.description task.description.to_s
  json.taskStartPicKey task.start_pic_key.to_s
  json.taskEndPicKey task.end_pic_key.to_s
  json.task_times task.task_times
  json.current_times task.current_times
  json.time_info task.time_info
  json.task_type task.task_type
  json.end_at task.end_at.to_s
  json.start_at task.start_at.to_s
  json.created_at task.created_at.to_s
  json.updated_at task.updated_at.to_s

  json.checkList task.task_items do |item|
    json.id item.id
    json.task_id item.task_id
    json.user_id item.user_id || -1
    json.user_name item.user.try(:name).to_s
    json.name item.name
    json.t_order item.position
    json.status item.status
    json.check_status item.check_status
    json.check_at item.check_at.to_s
    json.description item.description.to_s
    json.created_at item.created_at.to_s
    json.updated_at item.updated_at.to_s
    json.problem_level item.problem_level
  end
end