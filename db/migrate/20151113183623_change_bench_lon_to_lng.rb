class ChangeBenchLonToLng < ActiveRecord::Migration
  def change
    rename_column :benches, :lon, :lng
  end
end
