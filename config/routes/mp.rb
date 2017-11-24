Wp::Application.routes.draw do

  namespace :api do
    namespace :mp do
      resources :wx_users
      resources :auctions
      resources :home, only: [] do
        collection do
          get :category, :brand, :tag
        end
      end
    end
  end
end
