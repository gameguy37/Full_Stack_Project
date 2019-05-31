json.partial! 'api/users/user', user: @user

json.session do
    json.id @user.id
end