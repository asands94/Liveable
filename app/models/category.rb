class Category < ApplicationRecord
  # has_many :cat_post_joins
  # has_many :posts, through: :cat_post_joins
  has_and_belongs_to_many :posts
end
