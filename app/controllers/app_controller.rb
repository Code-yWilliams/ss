class AppController < ApplicationController
  layout 'app'
  
  skip_before_action :authenticate_user!
  after_action :set_csrf_cookie
  def set_csrf_cookie
    cookies['X-CSRF-TOKEN'] = form_authenticity_token
  end

  def index
    @config = {
      environment: Rails.env
    }
  end
end
