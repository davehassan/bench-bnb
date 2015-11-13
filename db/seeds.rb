# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  the_window = Bench.create(description: "The spot outside appacademy", lat: 40.725086, lon: -73.996928)
  the_other_spot = Bench.create(description: "The outside spot", lat: 40.724262, lon: -73.996675)
  union_square = Bench.create(description: "Union Square", lat: 40.731048, lon: -73.998165)
