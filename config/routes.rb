Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :users
  get 'main/index'
  root 'main#index'
  #get 'home/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/home" => "main#home"
 # get "/index" => "main#index"
  #get "/cadastro" => "main#cadastro"
  get "/placar" => "main#placar"
  get "/jogo" => "main#jogo"
  get "/edit" => "main#edit"
  
  
  
  
 
  resources :sessions, only: [:new, :create, :destroy]

  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  
end

#teste