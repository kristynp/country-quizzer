class Api::V1::AttemptsController < ApplicationController
  def index 
    attempts = Attempt.all 
    render json: AttemptSerializer.new(attempts)
  end
  
  def create 
    attempt = Attempt.new(attempt_params)
    if attempt.save 
      render json: attempt, status: :accepted
    else
      render json: {errors: attempt.errors.full_messages}, status: :unprocessible_entity
    end
  end

  private 

  def attempt_params 
    params.require(:attempt).permit(:total_score, :user_id)
  end
end
