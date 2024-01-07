module Api
  module V1
    class SessionsController < ApiController
      skip_before_action :authenticate_user!, only: [:create]
      include Devise::Controllers::Helpers

      def create
        user = User.find_for_authentication(email: login_params[:email])
        user&.valid_password?(login_params[:password])

        if user && user.errors.empty?
          sign_in(user) if user.errors.empty?
          render json: { user: user }, status: :ok
        else
          render json: { errors: user.errors }, status: :unauthorized
        end
      end

      private

      def login_params
        params.require(:user).permit(:email, :password, :remember)
      end
    end
  end
end
