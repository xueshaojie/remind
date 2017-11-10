class TempFile < ActiveRecord::Base
  mount_uploader :url, TempFileUploader
end