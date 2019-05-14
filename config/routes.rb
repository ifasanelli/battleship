Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/home" => "main#home"
  get "/index" => "main#index"
  get "/cadastro" => "main#cadastro"
  get "/placar" => "main#placar"
end

#teste