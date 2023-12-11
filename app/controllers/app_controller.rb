class AppController < ApplicationController
  layout 'app'
  
  skip_before_action :authenticate_user!

  def index
    @config = {
      environment: Rails.env
    }
  end
end
