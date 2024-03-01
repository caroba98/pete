class CreateArticles < ActiveRecord::Migration[7.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :subtitle
      t.string :video_link
      t.text :content

      t.timestamps
    end
  end
end
