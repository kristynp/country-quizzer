class User < ApplicationRecord
  has_many :attempts, dependent: :destroy
end
