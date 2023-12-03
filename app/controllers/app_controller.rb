class AppController < ApplicationController
  layout 'app'

  def index
    @config = {
      environment: Rails.env
    }
  end
end
