class AddResultToSurveyResults < ActiveRecord::Migration
  def change
  	add_column :survey_results, :result, :text, comment: "评测结果"
  end
end
