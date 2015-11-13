class Bench < ActiveRecord::Base
  validates :lat, :lon, presence: true

  def self.in_bounds(bounds)
    north_south_interval = [bounds["southWest"]["lat"], bounds["northEast"]["lng"]]
    east_west_interval = [bounds["southWest"]["lat"], bounds["northEast"]["lng"]]

    
  end
end
