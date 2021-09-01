# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Location.destroy_all

@category = Category.create!(name: 'Housing Security')
@category2 = Category.create!(name: 'House Maintenance')
@category3 = Category.create!(name: 'Prices')
puts "#{Category.count} categories created"

@location = Location.create!(name: 'Auckland')
@location2 = Location.create!(name: 'Wellington')
@location3 = Location.create!(name: 'Christchurch')
@location4 = Location.create!(name: 'Dunedin')
puts "#{Location.count} locations created"