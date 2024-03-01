class Article < ApplicationRecord
  has_many_attached :pictures
  has_and_belongs_to_many :hashtags
end
