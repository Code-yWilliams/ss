Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'app#index'

  scope '/app' do
    get '/*path', to: 'app#index'
  end
end
