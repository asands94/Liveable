class Post < ApplicationRecord
  belongs_to :user
  belongs_to :location
  has_and_belongs_to_many :categories
  validates :message, length: {maximum: 250}
end
