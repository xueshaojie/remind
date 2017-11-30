# -*- coding: utf-8 -*-
Wp::Application.routes.draw do

  root to: 'home#index'

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

  namespace :admin do
    resources :passwords, only: [:new, :create]

    resources :surveys do
      resources :survey_items
    end

    resources :survey_results
    resources :feedbacks
  end

  namespace :api do
    namespace :wx_users do
      resources :sessions do
        get :logout, on: :collection
      end
    end
    resources :tasks

    namespace :mp do
      resources :feedbacks, only: [:create, :destroy]
    end
  end

end
