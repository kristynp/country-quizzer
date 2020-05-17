class AddMapIdToCountries < ActiveRecord::Migration[6.0]
  def change
    add_column :countries, :map_id, :integer
  end
end
