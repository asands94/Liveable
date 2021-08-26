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

10.times do
  Category.create!(name: Faker::Movies::HarryPotter.house)
end
puts "#{Category.count} categories created"

 10.times do
  @location = Location.create!(name: Faker::Movies::HarryPotter.location)
end
puts "#{Location.count} locations created"

10.times do
  Post.create!(location: @location, title: Faker::Movies::HarryPotter.book, message: Faker::Movies::HarryPotter.quote, user: @admin)
end

5.times do
  Post.create!(location: @location, image: 'https://i.imgur.com/QlOUQN9.png' , title: Faker::Movies::HarryPotter.book, message: Faker::Movies::HarryPotter.quote, user: @admin)
end
puts "#{Post.count} posts created"

Post.all.each do |post|
  rand(1..10).times do
    post.categories << Category.all.sample
  end
end


Location.all.each do |location|
  rand(1..10).times do
    location.posts << Post.all.sample
  end
end
