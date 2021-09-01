class DropJoinTableCategoriesPosts < ActiveRecord::Migration[6.1]
  def change
    drop_join_table :categories, :posts
  end
end
