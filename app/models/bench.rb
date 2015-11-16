class Bench < ActiveRecord::Base
  validates :lat, :lng, presence: true

  def self.in_bounds(filter)
    bounds = filter["bounds"]
    north_south_interval = { lat_lower: bounds["southWest"]["lat"], lat_upper: bounds["northEast"]["lat"]}
    east_west_interval = {lng_lower: bounds["southWest"]["lng"], lng_upper: bounds["northEast"]["lng"]}

    min_max = { min_seats: filter["min"], max_seats: filter["max"]}
    self.where("lat < :lat_upper and lat > :lat_lower", north_south_interval)
        .where("lng < :lng_upper and lng > :lng_lower", east_west_interval)
        .where("seating >= :min_seats and seating < :max_seats", min_max)
  end
end
