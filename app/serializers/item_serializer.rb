class ItemSerializer < ActiveModel::Serializer 
  attributes :id, :name, :description, :price, :seller_name, :seller_phone
end 