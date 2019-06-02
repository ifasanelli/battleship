class Score < ApplicationRecord
    validates :point, presence: true
    
    belongs_to :user
end
