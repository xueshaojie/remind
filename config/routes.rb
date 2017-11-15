# -*- coding: utf-8 -*-
Wp::Application.routes.draw do
  root to: 'home#index'

  resources :addresses, only: []  do
    get :cities, :districts, on: :collection
  end


  resources :logged_exceptions
  get 'users/find' => 'users#find'
  mount RuCaptcha::Engine => "/rucaptcha"

  require 'sidekiq/web'
  # authenticate :account do
  mount Sidekiq::Web => '/sidekiq'
  # end

  resources :sessions, only: :create
  match 'sign_in'  => 'sessions#new',     as: :sign_in
  match 'sign_out' => 'sessions#destroy', as: :sign_out
  match 'secret'   => 'sessions#secret'
  match 'register' => 'accounts#new', as: :register
  match 'profile' => 'accounts#index', as: :profile

  resources :passwords, only: [:new, :create]
  resources :password_resets do
    post :resend_email, on: :member
  end

  match :verify_code, :validate_image_code, :console, controller: :home

  match "/404", :to => "home#not_found", as: :four_o_four, constraints: {format: :html}
  match "/500", :to => "home#error", as: :five_o_o, constraints: {format: :html}

  resources :home, only: :index

  # resources :accounts, only: [:new, :create, :update, :edit] do
  #   collection do
  #     get :send_sms
  #     post :update_mobile
  #   end
  # end

  resources :addresses, only: []  do
    get :cities, :districts, on: :collection
  end

  namespace :admin do
    resources :roles
    resources :product_categories do
      put :frost, :normal, on: :member
    end

    resources :brand_categories do
      put :frost, :normal, on: :member
    end

    resources :guide_infos
    resources :brands do
      put :frost, :normal, on: :member
    end

    resources :shops do
      put :frost, :normal, :plus, :reduce, on: :member
      get :plus, :reduce, on: :member
      post :change_amount, on: :collection
    end

    resources :shop_deposit_logs
    resources :tags

    resources :passwords, only: [:new, :create]
    resources :users do
      put :sync, :normal, :frost, :reset, on: :member
      post :sync_fetch, :transfer, :deal_transfer, on: :collection
    end

    resources :suppliers, :asset_checks, :warehouses, :asset_categories
  end

  namespace :api do
    resources :tasks
  end

  namespace :wap do
    root to: 'home#index'
    get 'sign_in', to: 'sessions#new'
    post 'sign_in', to: 'sessions#create'

    resources :products
    resources :orders
    resources :shop_customers
    resources :warehouses
    resources :suppliers
    resources :shop_users
  end

end
