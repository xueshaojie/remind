Wp::Application.routes.draw do

  namespace :api do
    namespace :mp do
      resources :wx_users do
        get :wx_login, on: :collection
      end
      resources :notices do
        post :cancel, on: :member
      end
      resources :currencies do
        get :search, on: :collection
      end
    end
  end
  
end
