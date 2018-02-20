class AddSellerNameSellerPhonePriceToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :seller_name, :string
    add_column :items, :seller_phone, :string
    add_column :items, :price, :string
  end
end
