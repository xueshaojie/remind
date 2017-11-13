# -*- coding: utf-8 -*-
Wp::Application.routes.draw do

  root to: 'home#index'


  # resources :logged_exceptions
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

  resources :accounts, only: [:new, :create, :update, :edit] do
    collection do
      get :send_sms
      post :update_mobile
    end
  end

  resources :addresses, only: []  do
    get :cities, :districts, on: :collection
  end

  namespace :admin do
    # get 'task_templates/change', to: 'task_templates#change'

    # resources :archive_categories

    # resources :task_templates do
    #   get :qrcode, :download, :copy, on: :member
    #   put :on, :off, :delete_next, :delete_current, on: :member
    # end
    # resources :task_template_items do
    #   put :up, :down, on: :member
    # end
    resources :tasks, :task_records
    resources :task_categories

    resources :roles
    resources :departments do
      put :sync, :normal, :disabled, on: :member
      post :sync_fetch, on: :collection
    end

    resources :product_categories

    resources :passwords, only: [:new, :create]
    resources :users do
      put :sync, :normal, :frost, :reset, on: :member
      post :sync_fetch, :transfer, :deal_transfer, on: :collection
    end

    resources :visits do
      put :pending, :done, on: :member
    end

    resources :suppliers, :asset_checks, :warehouses, :asset_categories

    resources :plant_assets  do
      get :receive, :record, :qrcode, :download, on: :member
      post :deal, :handle, on: :member
      post :import, on: :collection
    end
    resources :plant_usage_records

    resources :assets do
      get :detail, :approve, :print, on: :member
      post :check, on: :member
      put :deal, on: :member
      resources :items, :logs
    end

    resources :materials, :material_usage_records
    resources :material_batches do
      get :receive, on: :member
      put :deal, on: :member
    end

    resources :species do
      get :adjust, on: :member
      post :deal, on: :member
    end
    resources :species_adjustments, :asset_checks, :asset_check_maps

    resources :issues, :issue_types, :issue_pictures

    resources :archive_categories
    resources :archives do
      get :categories, on: :collection
    end
  end

  namespace :api do
    resources :tasks
  end

  namespace :wap do
    # get '/home', to: 'home#index'
    root to: 'home#index'

    get '/scan', to: 'assets#scan'

    resources :visits, :tasks

    resources :assets do
      get :logs, :approve, on: :member
      post :approve_result, on: :member
      get :my, :approves, on: :collection
    end

    resources :plant_assets
    resources :asset_checks do
      get :scan, on: :member
      post :check, :done, on: :member
      get :asset_check_map, on: :collection
    end

    resources :issues  do
      get :detail, on: :member
      post :claim, on: :member
      get :my, :pending, :list, on: :collection
    end
  end

end
