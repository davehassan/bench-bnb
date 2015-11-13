class Bench < ActiveRecord::Base
  validates :lat, :lon, presence: true
end
