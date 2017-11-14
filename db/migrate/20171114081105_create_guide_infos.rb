class CreateGuideInfos < ActiveRecord::Migration
  def change
    create_table :guide_infos do |t|
      t.string  "title"
      t.text  "content"
      t.integer  "status",      :default => 1, :null => false
      t.integer  "position",      :default => 1, :null => false
      t.timestamps
    end
  end
end
