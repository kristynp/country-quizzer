class CountrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :map_id
end
