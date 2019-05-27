Rails.application.routes.draw do
  
  resources :pontuacaos
  get "/home" => "main#home"
  get "/placar" => "main#placar"
  get "/jogo" => "main#jogo"
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

