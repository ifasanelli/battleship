class SessionsController < ApplicationController
  
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/home'
    else
      redirect_to '/login', notice: "Email ou senha invalido"
    end
  end

  def destroy
    reset_session
    @current_user = nil
    redirect_to logout_path, notice: "Deslogado!"
  end

end