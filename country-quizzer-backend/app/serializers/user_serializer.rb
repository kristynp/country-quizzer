class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :attempts
end
