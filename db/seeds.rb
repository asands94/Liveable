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

4.times do
  Post.create!(location: @location, image: 'https://www.randrmagonline.com/ext/resources/2016/Web-Exclusives/moldy-room.jpg?height=635&t=1460477825&width=1200', title: 'This Place is Awful!', message: 'It feels like the landlirds purposefully made a mess of things then charged us so much money to fix his mistakes. ', user: @admin)
end

4.times do
  Post.create!(location: @location2, image: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/36/1504902964-front-house-lg-light.jpg', title: 'I Can\'t Take it Anymore', message: 'The mold is becoming an issue, I wonder why i have this sore throat and I realize its from all the toxing I have to breathe in everyday.', user: @admin)
end

4.times do
  Post.create!(location: @location3, image: 'https://www.rdsenvironmental.com/wp-content/uploads/2017/11/ThinkstockPhotos-637186808.jpg', title: 'when will i be able to live in houses with NO mold???', message: 'Too much mold, not enough caring. Let\'s get that WOF on houses!!', user: @admin)
end

4.times do
  Post.create!(location: @location4, image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/288/288651/mold-in-the-home.jpg', title: 'Not worth the price', message: 'I\'ve seen shacks with better foundations than this place', user: @admin)
end

2.times do
  Post.create!(location: @location4, title: 'Not worth the price', message: 'I\'ve seen cheese with less mold than this place.', user: @admin)
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
