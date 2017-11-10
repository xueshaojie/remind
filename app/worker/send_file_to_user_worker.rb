class SendFileToUserWorker
  include Sidekiq::Worker
  sidekiq_options :queue => 'standard', :retry => true, :backtrace => true

  def perform(notice)
    department = Department.find(notice.department_id)
    unless department
      department.users.each do |t|
        NoticeMap.create!(
          user_id: t.id,
          notice_id: notice.id
          )
      end      
    end
  end

end