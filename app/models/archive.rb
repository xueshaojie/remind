class Archive < ActiveRecord::Base
  mount_uploader :file_name, FileUploader

  # attr_accessible :file_key, :first_category_id, :name, :position

  validates :first_category_id, :name, :file_name, presence: true

  belongs_to :first_category, class_name: 'ArchiveCategory'
  belongs_to :second_category, class_name: 'ArchiveCategory'
  belongs_to :three_category, class_name: 'ArchiveCategory'

  def file_url
    qiniu_image_url(file_key)
  end

  def category_name
    [first_category.try(:name), second_category.try(:name), three_category.try(:name)].compact.join('-')
  end

end
