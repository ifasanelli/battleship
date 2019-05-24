class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/home', notice: "Logado com sucesso!"
    else
      redirect_to '/login', notice: "Email ou senha invalido"
    end
  end

  def destroy
    session.delete(:user_id)
    @current_user = nil
    redirect_to '/login', notice: "Deslogado!"
  end

end