Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'app#index'

  # User login, logout, and forgot password routes
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    password: 'forgot-password'
  }, controllers: {}

  # Unauthenticated users go to the login page
  unauthenticated :user do
    get '/sign_up' => redirect('/sign_up')
    get '/*path' => redirect('/login')
  end

  get '/*path', to: 'app#index'
end
