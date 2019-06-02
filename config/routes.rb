Rails.application.routes.draw do
  
  match '/scores.json' => "scores#options", via: :options
  resources :scores
  get "/home" => "main#home"
  get "/jogo" => "main#jogo"
  get "/placar" => "main#placar"
  get "/edit" => "users#edit"
  root 'main#home'
  
  
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  delete 'logout' => 'sessions#destroy'
  
end

