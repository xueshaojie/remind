class ChangeGuideInfo < ActiveRecord::Migration
  def change
    rename_column :guide_infos, :type, :guide_type
    remove_column :guide_infos, :status
  end
end
