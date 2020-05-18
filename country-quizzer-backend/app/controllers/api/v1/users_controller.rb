class Api::V1::UsersController < ApplicationController
  def index
    users = User.all 
    render json: UserSerializer.new(users)
  end

  def create 
    user = User.new(user_params)
    if user.save 
      render json: user, status: :accepted
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessible_entity
    end
  end

  private 

  def user_params 
    params.require(:user).permit(:username)
  end

end
