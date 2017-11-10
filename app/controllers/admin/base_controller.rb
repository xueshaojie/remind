class Admin::BaseController < ApplicationController
  before_filter :required_account_sign_in
end
