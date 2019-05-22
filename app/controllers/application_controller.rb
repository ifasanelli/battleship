class ApplicationController < ActionController::Base
  helper_method :current_user
  include SessionsHelper
  before_action :require_login, :except=>[:new, :create]
  
  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    else
      @current_user = nil
    end
  end
  
  private

  def require_login
    unless logged_in?
      flash[:error] = "Por favor, logue uma conta para ver esta página"
      redirect_to '/login'
    end
  end
  
end