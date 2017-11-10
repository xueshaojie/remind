class IssueType < ActiveRecord::Base
  validates :user_id, :name, presence: true

  has_many :issues
  belongs_to :user

  acts_as_enum   :status,  :in => [
    ['normal', 1, '启用'],
    ['stop', 2, '停用']
  ]

end