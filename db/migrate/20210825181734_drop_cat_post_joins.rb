class DropCatPostJoins < ActiveRecord::Migration[6.1]
  def change
    drop_table :cat_post_joins
  end
end
