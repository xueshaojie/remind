class Merchant::BaseController < ApplicationController
  skip_before_filter :required_sign_in
  # before_filter :required_merchant_sign_in
end
