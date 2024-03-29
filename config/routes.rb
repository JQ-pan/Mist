Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create]
    resource :session, only: [:show, :create, :destroy]
    resources :games, only: [:index, :show] # do
      # resources :reviews, only: [:index, :create]
    # end
    # resources :reviews, only: [:update, :destroy]
    resources :cart_items, only: [:create, :index, :destroy]
    resources :library_items, only: [:create, :index]

    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
