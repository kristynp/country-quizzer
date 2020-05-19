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
    params.require(:attempt).permit(:user_id, :total_score, :albania, :andorra, :austria, :belarus, :belgium, :bosnia, :bulgaria, :croatia, :cyprus, :czechia, :denmark, :estonia, :finland, :france, :germany, :greece, :hungary, :iceland, :ireland, :italy, :kosovo, :latvia, :liechtenstein, :lithuania, :luxembourg, :malta, :moldova, :monaco, :montenegro, :netherlands, :north_macedonia, :norway, :poland, :portugal, :romania, :russia, :san_marino, :serbia, :slovakia, :slovenia, :spain, :sweden, :switzerland, :turkey, :ukraine, :united_kingdom, :vatican_city)
  end
end
