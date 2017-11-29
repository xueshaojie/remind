# -*- encoding : utf-8 -*-

namespace :dev do

  desc 'build test data ...'
  task init: [
    :init_account
  ]

  desc 'init account'
  task :init_account => :environment do
    account = Account.where(nickname: "biaotu").first_or_create!(password: 111111)
  end

end
