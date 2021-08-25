class Post < ApplicationRecord
  belongs_to :user
  belongs_to :location
  has_many :cat_post_joins
  has_many :categories, through: :cat_post_joins
end
