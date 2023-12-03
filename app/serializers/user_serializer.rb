class UserSerializer
  include JSONAPI::Serializer
  set_key_transform :camel_lower

  attributes :id, :email

  attribute :poop_burger do
    "cheese"
  end
end
