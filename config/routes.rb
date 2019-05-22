Rails.application.routes.draw do
  
  get "/home" => "main#home"
  get "/index" => "main#index"
  get "/placar" => "main#placar"
  get "/jogo" => "main#jogo"
  get "/edit" => "users#edit"
  root 'main#index'
  
  
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  
  
end

