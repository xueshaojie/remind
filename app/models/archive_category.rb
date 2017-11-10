class ArchiveCategory < ActiveRecord::Base

  validates :name, presence: true

  # attr_accessible :name, :parent_id, :position

  belongs_to :parent, class_name: 'ArchiveCategory', foreign_key: :parent_id
  has_many :children, class_name: 'ArchiveCategory', foreign_key: :parent_id

  acts_as_list scope: [:parent_id]
  acts_as_tree order: :position, foreign_key: :parent_id, counter_cache: false

  scope :root, where('archive_categories.parent_id IS NULL')

  def archives
    Archive.where('first_category_id = :cid or second_category_id = :cid or three_category_id = :cid', cid: id)
  end

  def to_s(join_by = " > ")
    self_and_ancestors.map(&:name).reverse.join(join_by)
  end

end
