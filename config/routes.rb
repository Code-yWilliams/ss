Rails.application.routes.draw do
  def draw(routes_name)
    route_parts = %w[config routes] + routes_name.to_s.split(File::SEPARATOR)
    filename = "#{route_parts.slice!(-1)}.rb"
    instance_eval(File.read(Rails.root.join(*(route_parts << filename))))
  end

  root 'app#index'

  get '/*path', to: 'app#index'

  # User login, logout, and forgot password routes
  # We are overriding the GET routes above and rendering the SPA above
  # but we are keeping these so we can keep using non-GET routes
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    password: 'forgot-password'
  }, controllers: {}

  draw :api_routes
end
