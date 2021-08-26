# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Location.destroy_all
Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'penguins', email: 'penguins@email.com', password: '123456')
puts "#{User.count} users created"

@category = Category.create!(name: 'Housing Security')
@category2 = Category.create!(name: 'House Maintainence')
@category3 = Category.create!(name: 'Prices')
puts "#{Category.count} categories created"

@location = Location.create!(name: 'Auckland')
@location2 = Location.create!(name: 'Wellington')
@location3 = Location.create!(name: 'Christchurch')
@location4 = Location.create!(name: 'Dunedin')
puts "#{Location.count} locations created"

10.times do
  Post.create!(location: @location, title: Faker::Movies::HarryPotter.book, message: Faker::Movies::HarryPotter.quote, user: @admin)
end

5.times do
  Post.create!(location: @location2, image: 'https://i.imgur.com/QlOUQN9.png' , title: Faker::Movies::HarryPotter.book, message: Faker::Movies::HarryPotter.quote, user: @admin)
end
puts "#{Post.count} posts created"

Post.all.each do |post|
  rand(1..3).times do
    post.categories << Category.all.sample
  end
end


Location.all.each do |location|
  rand(1..10).times do
    location.posts << Post.all.sample
  end
end
