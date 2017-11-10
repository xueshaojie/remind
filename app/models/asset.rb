class Asset < ActiveRecord::Base

  validates :user_id, :description, presence: true
  validates :no, uniqueness: true

  belongs_to :department
  belongs_to :user

  has_many :asset_logs, dependent: :destroy
  has_many :asset_items, dependent: :destroy

  acts_as_enum :status, :in => [
    ['wait', 0, '未提交'],
    ['process', 1, '审核中'],
    ['pass', 2, '已通过'],
    ['deny', -1, '被驳回']
  ]

  scope :not_wait, -> { where('assets.status <> ?', 0) }

  before_create :init_data

  def current_asset_log
    asset_logs.wait.first || asset_logs.where(status: [1,-1]).last || asset_logs.last
  end

  def wait_asset_log
    asset_logs.wait.first || asset_logs.last
  end

  def can_apply?
    Department.where(no: [user.department.no, 10003, 10002, 10001]).pluck(:user_id).all?
  end

  def apply
    asset_logs.delete_all

    if user.department.sub_leader_id
      asset_logs.create(user_id: user.department.user_id, position: 1)
      asset_logs.create(user_id: Department.where(no: 10003).first.user_id, position: 2)
      asset_logs.create(user_id: Department.where(no: 10002).first.user_id, position: 3)
      asset_logs.create(user_id: user.department.sub_leader_id, position: 4)
      asset_logs.create(user_id: Department.where(no: 10001).first.user_id, position: 5)
    else
      asset_logs.create(user_id: user.department.user_id, position: 1)
      asset_logs.create(user_id: Department.where(no: 10003).first.user_id, position: 2)
      asset_logs.create(user_id: Department.where(no: 10002).first.user_id, position: 3)
      asset_logs.create(user_id: Department.where(no: 10001).first.user_id, position: 4)
    end

    # asset_logs.create(user_id: user.department.sub_leader_id, position: 1)
    # asset_logs.create(user_id: Department.where(no: 10003).first.user_id, position: 2)
    # asset_logs.create(user_id: Department.where(no: 10002).first.user_id, position: 3)
    # asset_logs.create(user_id: Department.where(no: 10001).first.user_id, position: 4)

    # Department.where(no: [user.department.no, 10003, 10002, 10001]).each_with_index do |department, index|
    #   asset_logs.create(user_id: department.user_id, position: index+1)
    # end

    process!
  end

  private

    def init_data
      now = Time.now
      count = Asset.where('DATE(created_at) = ?', now.to_date).count
      no = ['cg', now.strftime('%Y%m%d'), count.next.to_s.rjust(4, '0')].join('-')
      self.no = no

      self.department_id = self.user.department_id if self.user
    end
end