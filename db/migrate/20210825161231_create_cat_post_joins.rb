class CreateCatPostJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :cat_post_joins do |t|
      t.references :post, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
