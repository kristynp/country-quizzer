class AttemptSerializer
  include FastJsonapi::ObjectSerializer
  attributes :total_score, :user
end
