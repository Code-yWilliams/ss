class AppController < ApplicationController
  layout 'app'

  def index
    @config = {
      cody: 1
    }
  end
end
