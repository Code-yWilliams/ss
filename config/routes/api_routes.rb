scope default: { format: :json } do
  namespace :api do
    namespace :v1 do
      post 'sessions' => 'sessions#create'
    end
  end
end
