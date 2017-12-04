Wp::Application.routes.draw do

  namespace :api do
    namespace :mp do
      resources :wx_users
      resources :feedbacks, only: [:create, :destroy]
      resources :survey_results do
        collection do
          get :get_info
        end
      end
    end
  end
end
