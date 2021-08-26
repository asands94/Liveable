Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: :create
  resources :posts
  resources :locations, only: [:index, :show]
  resources :categories, only: [:index, :show]
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/posts/:post_id/locations/:id', to: 'locations#add_to_post'
  get '/posts/:post_id/categories/:id', to: 'categories#add_to_post'
end
