class CreateSitches < ActiveRecord::Migration
  def change
    create_table :sitches do |t|
      t.string :name
      t.string :venue_type
      t.string :neighborhood
      t.integer :wait_time
      t.string :description
      t.decimal :latitude
      t.decimal :longitude
      t.string :address
      t.string :website
      t.string :marker_symbol

      t.timestamps null: false
    end
  end
end
